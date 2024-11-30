import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
// import style from './UpdateProduto.module.css';  // Certifique-se de que o arquivo de estilo está correto

// Certifique-se de que os componentes Input, Category, ImageView, e Button estão importados corretamente
// import Input from '../components/Input';  
// import Category from '../components/Category';
// import ImageView from '../components/ImageView';
// import Button from '../components/Button';

const UpdateProduto = () => {
    // Estado para armazenar os dados do doce
    const [doce, setDoce] = useState({});
    const [categorias, setCategorias] = useState([]);  // Adicionando estado para categorias

    // Obtendo o id do produto pela URL
    const { id_doce } = useParams();
    const navigate = useNavigate();

    // Função para capturar os dados dos inputs
    function handlerChangeDoce(event) {
        const { name, value } = event.target;
        setDoce((prevDoce) => ({ ...prevDoce, [name]: value }));
    }

    // Recupera os dados de categorias do backend
    useEffect(() => {
        fetch('http://localhost:3000/produtos', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': '*'
            },
        })
            .then((resp) => resp.json())
            .then((data) => {
                setCategorias(data.data);  // Atualizando o estado com as categorias
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    // Recupera os dados do produto com base no id_doce
    useEffect(() => {
        fetch(`http://localhost:3000/produtos/${id_doce}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': '*'
            },
        })
            .then((resp) => resp.json())
            .then((data) => {
                setDoce(data.data);  // Atualiza o estado com os dados do produto
            })
            .catch((err) => {
                console.log(err);
            });
    }, [id_doce]);

    // Função para atualizar o produto no backend
    function UpdateProduto(doce) {
        fetch('http://localhost:3000/atualizarProduto', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': '*'
            },
            body: JSON.stringify(doce)
        })
            .then((resp) => resp.json())
            .then((data) => {
                navigate('/listDoce', { state: 'PRODUTO ATUALIZADO' });
            })
            .catch((err) => {
                console.log(err);
            });
    }

    // Função para lidar com o envio do formulário
    function submit(event) {
        event.preventDefault();
        UpdateProduto(doce);
    }

    return (
        <section className={style.create_doce}>
            <h1 className={style.title}>ATUALIZAR MATERIAL</h1>

            <form onSubmit={submit}>
                <Input
                    type='text'
                    name='nome_produto'
                    id='nome_produto'
                    placeHolder='Digite o nome deste produto'
                    text='Título do produto'
                    handlerChangeMaterialProp={handlerChangeDoce}
                    value={doce.nome_produto || ''}
                />


                <Input
                    type='text'
                    name='descricao_produto'
                    id='descricao_produto'
                    placeHolder='Digite uma descrição do produto'
                    text='Descrição do produto'
                    handlerChangeDoceProp={handlerChangeDoce}
                    value={doce.descricao_produto || ''}
                />

                <ImageView
                    name='imageView'
                    placeHolder='Insira uma imagem de visualização'
                    text='Imagem de visualização'
                />

                <Input
                    type='file'
                    name='file'
                    placeHolder='Insira seu arquivo'
                    text='Arquivo'
                    handlerChangeDoceProp={null}
                />

                <Button
                    rotulo='Editar produto'
                />
            </form>
        </section>
    );
};

export default UpdateProduto;
