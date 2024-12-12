import React, { useState, useEffect } from 'react';
import style from './ListDoce_container.module.css';
import Container from '../../Layout/Container/Container';
import ContainerDoce from '../../Layout/Container/ContainerDoce';
import CardDoces from '../../../../CardDoce';
import logo from '../../../../public/logo.png'
const ListDoce = () => {

    /* CRIAÇAO DO STATE DOS DADOS */
    
    const [doces, setDoces] = useState([]);

    useEffect(()=>{

        fetch('http://localhost:3000/produtos', {
            method: 'GET',
            mode:'cors',
            headers:{
                'Content-Type':'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': '*'
            },
        })
            .then((resp)=>resp.json())
            .then((data) => {
                console.log('Response completa:', data);
                setDoces(data.data || data);
                console.log('STATE: ' + doces);
            })
            .catch((err)=>{console.log(err)});

    }, []);

    return (

        <Container>

            <section className={style.listDoce_container}>
                
                <h1>DOCES LIST</h1>

                <ContainerDoce>
                    {
                        doces.map((produto) => (
                            <CardDoces
                                nome={produto.produto}
                                descricao={produto.descricao}
                                valor={produto.valor}
                                imagem={logo}
                                _id={produto._id}
                                key={produto._id}
                            />
                        ))
                    }
                </ContainerDoce>
            </section>

        </Container>
    )
}

export default ListDoce


