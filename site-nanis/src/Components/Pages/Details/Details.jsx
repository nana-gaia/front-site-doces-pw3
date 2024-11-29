import { React, useState, useEffect } from "react";
import { useParams} from "react-router-dom";  
import style from "./Details.module.css";
import Button from "../../Button";
import logo from "../../../../public/logo.png"; 

const DetailDoce = () => {
   
    const  {id_doce} = useParams()
    console.log('CODIGO DOCE: ' + id_doce)

    
    const [doce, setDoce] = useState({})

    
    useEffect(()=>{

        fetch(`http://localhost:3000/produtos/${id_doce}`, {
            method: 'GET',
            mode:'cors',
            headers: {
            'Content-Type':'application/json',
            'Access-Control-Allow-Origin':'*',
            'Access-Control-Allow-Headers':'*',
        },
        })
        .then((resp)=>resp.json())
        .then((data)=>{
        setDoce(data.data);
        console.log(data.data);
        })
        .catch((err)=>{console.log(err)});

        },[]);

    return(
        <div className={style.grid}>
            <div className={style.container_img}>
                <img className={style.img_doce_detail} src={logo} alt='Imagem de brownie' />
            </div>

            <div className={style.info}>
                <span className={style.nome}>{doce.nome}</span>
                <span className={style.valor}>{doce.valor}</span>
                <span className={style.descricao}>{doce.descricao}
                </span>
            
                <div>
                    <Button 
                        label='EDITAR'
                        router='/updateDoce/'
                        cod_doce={doce.id_doce}
                    />

                    <Button 
                        label='EXCLUIR'
                        router='/deleteDoce/'
                        cod_doce={doce.id_doce}
                    />

                </div>
            </div>
        </div>
    )
}

export default DetailDoce;