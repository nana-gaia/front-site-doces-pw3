import React from 'react';
import style from './CreateDoce.module.css';
import NavBar from '../../Layout/NavBar/NavBar'


const CreateDoce = () => {
    return (
        <>
        <NavBar/>



        <form className={style.CreateDoce}>
        <h1> Nani's Sweet</h1>
        <p> cadastre o produto!</p>
            <input type="produto"
            placeholder='Produto'
            required
            />

            <input type="valor"
            placeholder='Valor'
            required
            />

            <button>

                Cadastrar

            </button>
       </form>




    </>
    );
}

export default CreateDoce;