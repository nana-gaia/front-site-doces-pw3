import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";  
import style from "./Details.module.css";
import Button from "../../Button";
import logo from "../../../../public/logo.png"; 

const DetailDoce = () => {
    const { id } = useParams();  // Certifique-se de usar "id" aqui, pois é o nome do parâmetro na URL
    console.log("ID do Doce:", id);  // Verifique no console se o ID está sendo recebido corretamente

    const [doce, setDoce] = useState({});

    useEffect(() => {
        if (id) {  // Verifica se o ID está presente
            fetch(`http://localhost:3000/produtos/${id}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then((resp) => resp.json())
            .then((data) => {
                setDoce(data);  // Preenche o estado com o doce encontrado
                console.log("Doce encontrado:", data);
            })
            .catch((err) => console.error("Erro ao buscar o doce:", err));
        }
    }, [id]);  // Atualiza o estado sempre que o ID mudar

    return (
        <div className={style.grid}>
            <div className={style.container_img}>
                <img className={style.img_doce_detail} src={logo} alt="Imagem de brownie" />
            </div>

            <div className={style.info}>
                <span className={style.nome}>{doce.produto}</span>
                <span className={style.valor}>R$ {doce.valor?.toFixed(2)}</span>
                <span className={style.descricao}>{doce.descricao}</span>
                
                <div>
                    <Button label="EDITAR" router={`/update/${doce._id}`} />
                    <Button label="EXCLUIR" router={`/delete/${doce._id}`} />
                </div>
            </div>
        </div>
    );
}

export default DetailDoce;
