import React from 'react';
import style from './Cardapio.module.css';
import NavBar from '../../Layout/NavBar/NavBar'
import Select from '../../forms/Select'


const Cardapio = () => {
    return (
        <>
            <NavBar/>
            <section className={style.Cardapio}>
                <h1>AQUI ESTARÁ O CARDÁPIO</h1>
                <img src ="./brownie1.jpg"/>
                <img src = "./brownie2.jpg"/>
            </section>
        
        </>
    );
}

export default Cardapio;