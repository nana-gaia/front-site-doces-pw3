
import React, { useState } from 'react';
import style from './CreateDoce.module.css';
import NavBar from '../../Layout/NavBar/NavBar'
import axios from 'axios';

const CadastroProduto = () => {
    const [produto, setProduto] = useState('');
    const [valor, setValor] = useState('');
    const [mensagem, setMensagem] = useState('');
  
    const handleSubmit = async (e) => {
      e.preventDefault(); 
  
      try {
        const response = await axios.post('http://localhost:3000/produtos', { // Altere para o endpoint correto
          produto,
          valor
        });
        console.log('Resposta do servidor:', response.data); // Log para ver a resposta
        setMensagem(`Produto criado com sucesso: ${response.data.nome}`);
      } catch (error) {
        console.error('Erro:', error); // Log para ver o erro
        setMensagem(`Erro ao criar produto: ${error.response?.data?.mensagem || error.message || 'Erro desconhecido'}`);
      }
    };
  
    return (
      <div>
        <NavBar />
      
        <form className={style.container} onSubmit={handleSubmit}>
      
        <h1 className={style.txt1}> Cadastre o produto </h1>
            
            <input 
              placeholder= 'Digite o nome do produto'
              type="text"
              value={produto}
              onChange={(e) => setProduto(e.target.value)}
              required
            />
          
            <input
              placeholder= 'Digite o valor'
              type="number"
              value={valor}
              onChange={(e) => setValor(e.target.value)}
              required
            />
          
          <button type="submit">Cadastrar</button>
        </form>
        {mensagem && <p className={style.pcriar}>{mensagem}</p>}
      </div>
    );
  };
  
  export default CadastroProduto;
  