import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function DeleteProduto() {
    const { id } = useParams();  // Pega o ID do produto a partir da URL
    const navigate = useNavigate();  // Hook para navegação

    // useEffect com dependência de _id para evitar chamadas infinitas
    useEffect(() => {
        // Fazendo a requisição DELETE para excluir o produto
        fetch(`http://localhost:3000/delete/${id}`, {
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
                navigate('/cardapio',{state:'LIVRO EXCLUÍDO COM SUCESSO!'});
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
