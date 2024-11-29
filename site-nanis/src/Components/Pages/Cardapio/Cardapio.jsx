import React from 'react';
import { useState, useEffect } from "react"

import style from './Cardapio.module.css';
import NavBar from '../../Layout/NavBar/NavBar';
import ListDoces from '../ListDoce/ListDoce';
import Details from '../Details/Details'
import Button from '../../Button';
import CardDoces from '../../../../CardDoce';
import logo from '../../../assets/logo.png'






const Cardapio = ({ doceNome, doceDescricao, docePreco }) => {
    return (
        <>
        
            <NavBar/>
            <section className={style.Cardapio}>
                <h1 className={style.hcardapio}>AQUI ESTARÁ O CARDÁPIO</h1>
                <img src ="./brownie1.jpg"/>
                <img src = "./brownie2.jpg"/>
                
            </section>
            
                <CardDoces imagem={logo}/>
                <ListDoces/>
              
        
        </>
    );
}

export default Cardapio;

