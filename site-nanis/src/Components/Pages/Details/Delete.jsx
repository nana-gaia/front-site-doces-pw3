import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function DeleteProduto() {
    const { id_doce } = useParams();  // Pega o ID do produto a partir da URL
    const navigate = useNavigate();  // Hook para navegação

    // useEffect com dependência de id_doce para evitar chamadas infinitas
    useEffect(() => {
        // Fazendo a requisição DELETE para excluir o produto
        fetch(`http://localhost:3000/excluirProduto/${id_doce}`, {
            method:'DELETE',
            mode:'cors',
            headers:{
                'Content-Type':'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': '*'
            },
        }).then(
            resp => resp.json()
        ).then(
            (data)=>{
                navigate('/Cardapio',{state:'LIVRO EXCLUÍDO COM SUCESSO!'});
            }
        ).catch(
            err => console.log(err)
        );
    })

    return (
        <div>
            {/* <h1>TESTE DE EXCLUSÃO DE LIVRO!!!!</h1> */}
        </div>
    )
}

export default DeleteProduto;
