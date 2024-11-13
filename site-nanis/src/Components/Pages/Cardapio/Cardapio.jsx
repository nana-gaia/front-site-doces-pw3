import React from 'react';
import style from './Cardapio.module.css';
import NavBar from '../../Layout/NavBar/NavBar';
import ListDoces from '../ListDoce/ListDoce';



const Cardapio = ({ doceNome, doceDescricao, docePreco }) => {
    return (
        <>
            <NavBar/>
            <section className={style.Cardapio}>
                <h1 className={style.hcardapio}>AQUI ESTARÁ O CARDÁPIO</h1>
                <img src ="./brownie1.jpg"/>
                <img src = "./brownie2.jpg"/>
            </section>
            <div className={style.container}>
                <div className={style.Doce}>
                    <div>
                        <label htmlFor="">{doceNome}</label>
                        <p>{doceDescricao}</p>
                        <span>{docePreco}</span>
                    </div>
                </div>
                
                <ListDoces />
            </div>
        </>
    );
}

export default Cardapio;
