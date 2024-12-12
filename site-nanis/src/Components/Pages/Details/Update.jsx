import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import style from './Update.module.css';
import Input from '../../forms/Input';
// import Select from '../../forms/Select';
import Button from '../../forms/Button';

const UpdateDoce = () => {
    const [doce, setDoce] = useState({});
    // const [categorias, setCategorias] = useState([]);
    const { _id } = useParams();
    const navigate = useNavigate();

    // Atualiza o estado `doce` ao alterar os inputs
    function handlerChangeDoce(event) {
        const { name, value } = event.target;
        setDoce((prevDoce) => ({ ...prevDoce, [name]: value }));
    }

    // Atualiza o estado `doce` ao selecionar uma categoria
    // function handleChangeCategoria(event) {
    //     setDoce((prevDoce) => ({ ...prevDoce, categoria_id: event.target.value }));
    // }

    // Recupera os dados das categorias do backend
    // useEffect(() => {
    //     fetch('http://localhost:3000/listDoces', {
    //         method: 'GET',
    //         headers: {
    //             'Content-Type': 'application/json',
    //             'Access-Control-Allow-Origin': '*',
    //         },
    //     })
    //         .then((resp) => resp.json())
    //         .then((data) => {
    //             if (data && data.data) {
    //                 setCategorias(data.data);
    //             }
    //         })
    //         .catch((error) => console.error('Erro ao buscar categorias:', error));
    // }, []);

    // Recupera os dados do doce do backend
    useEffect(() => {
        fetch(`http://localhost:3000/produtos/${_id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': '*'
            },
        })
            .then((resp) => resp.json())
            .then((data) => {
                if (data && data.data) {
                    setDoce(data.data);
                }
            })
            .catch((err) => console.error('Erro ao buscar doce:', err));
    }, []);

    // Envia os dados para o backend para atualizar o doce
    function update(doce) {
        console.log(JSON.stringify(doce));

        fetch(`http://localhost:3000/update/`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
            },
            body: JSON.stringify(doce),
        })
            .then((resp) => resp.json())
            .then((data) => {
                console.log('Atualização concluída:', data);
                navigate('/listDoce', { state: 'DOCE ATUALIZADO COM SUCESSO!' });
            })
            .catch((err) => console.error('Erro ao atualizar doce:', err));
           
    }

    // Função de envio do formulário
    function submit(event) {
        event.preventDefault();
        update(doce);
    }

    return (
        <section className={style.create_doce_container}>
            <h1>ALTERAÇÃO DE DOCES</h1>
            <form onSubmit={submit}>
                <Input
                    type="text"
                    name="nome_doce"
                    id="nome_doce"
                    placeHolder="Digite o nome do doce"
                    text="Nome do Doce"
                    handlerOnChange={handlerChangeDoce}
                    value={doce.produto}
                />

                <Input
                    type="number"
                    name="valor"
                    id="valor"
                    placeHolder="Digite o valor do doce"
                    text="Valor do Doce"
                    handlerOnChange={handlerChangeDoce}
                    value={doce.valor}
                />

                {/* <Select
                    name="categoria_id"
                    text="Selecione a Categoria"
                    options={categorias}
                    handlerOnChange={handleChangeCategoria}
                    value={doce.categoria_id || ''}
                /> */}

                <Button rotulo="Editar Doce" />
            </form>
        </section>
    );
};

export default UpdateDoce;
