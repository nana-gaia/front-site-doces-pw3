import './Cadastro.module.css';
import { useState } from 'react';
import NavBar from '../../Layout/NavBar/NavBar'



function Cadastro() {

    return (
        <>
        <NavBar/>
        <h1> Nani's Sweet</h1>
        <p> cadastre-se e receba promoções exclusivas!</p>
        <form>
            <input type="email"
            placeholder='E-mail'
            required
            />

            <input type="password"
            placeholder='Senha'
            required
            />

            <input type="text"
            placeholder='Nome de Usuário'
            required
            />

            <button>

                Cadastre-se

            </button>
       </form>



    </>



    );
}

export default Cadastro;