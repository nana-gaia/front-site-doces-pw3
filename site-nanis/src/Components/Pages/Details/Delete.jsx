import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function DeleteProduto() {
    const { id_doce } = useParams();  // Pega o ID do produto a partir da URL
    const navigate = useNavigate();  // Hook para navegação

    // useEffect com dependência de id_doce para evitar chamadas infinitas
    useEffect(() => {
        // Fazendo a requisição DELETE para excluir o produto
        fetch(`http://localhost:3000/excluirProduto/${id_doce}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': '*',
            },
        })
            .then((resp) => resp.json())  // Espera a resposta em JSON
            .then((data) => {
                // Após excluir o produto, navega para a lista e passa a mensagem
                navigate('/listDoce', { state: 'PRODUTO EXCLUÍDO COM SUCESSO!' });
            })
            .catch((err) => {
                console.error('Erro ao excluir produto:', err);
            });
    }, [id_doce, navigate]);  // O useEffect depende do id_doce, assim ele só será executado quando o id_doce mudar

    return null;  // Não precisa renderizar nada, a exclusão e navegação acontecem no efeito
}

export default DeleteProduto;
