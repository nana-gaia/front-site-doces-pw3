import React, { useState, useEffect } from 'react';
import style from './ListDoce_container.module.css'

const ListarProdutos = () => {
    const [produtos, setProdutos] = useState([]);
    const [erro, setErro] = useState(null);
    const [produtoSelecionado, setProdutoSelecionado] = useState(null);

    useEffect(() => {
        fetch('http://localhost:3000/produtos')
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`Erro ao buscar produtos: ${response.status}`);
                }
                return response.json();
            })
            .then((data) => {
                if (data && data.data) {
                    setProdutos(data.data); 
                } else {
                    throw new Error('Dados inválidos recebidos da API');
                }
            })
            .catch((error) => {
                setErro(error.message);
            });
    }, []);

    const handleSelectChange = (event) => {
        const selectedId = event.target.value;
        const selectedProduto = produtos.find(produto => produto._id === selectedId);
        setProdutoSelecionado(selectedProduto);
    };

    return (
        <div>
            <h1 className={style.hproduto}>Selecionar Produto</h1>
            {erro && <p>Erro: {erro}</p>}
            
            {produtos.length > 0 ? (
                <select onChange={handleSelectChange} defaultValue="">
                    <option value="" disabled>Escolha um produto</option>
                    {produtos.map((produto) => (
                        <option key={produto._id} value={produto._id}>
                            {produto.produto} 
                        </option>
                    ))}
                </select>
            ) : (
                <p>Nenhum produto encontrado.</p>
            )}

            {produtoSelecionado && (
                <div className={style.selecionar}>
                    <h2>Detalhes do Produto Selecionado</h2>
                    <p className={style.label}> Nome: {produtoSelecionado.produto}</p> 
                    <p className={style.label}> Descrição: {produtoSelecionado.descricao}</p>
                    <p className={style.label}> Preço: R$ {Number(produtoSelecionado.valor).toFixed(2)}</p>
                </div>
            )}
        </div>
    );
};

export default ListarProdutos;
