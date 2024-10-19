import React, { useState } from 'react';
import style from './Cadastro.module.css'
import NavBar from '../../Layout/NavBar/NavBar';
import axios from 'axios';

const CadastroUsuario = () => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [mensagem, setMensagem] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault(); // Previne o comportamento padrão do formulário

    try {
      const response = await axios.post('http://localhost:3000/usuarios', { // Altere para o endpoint correto
        nome,
        email,
        senha,
      });
      console.log('Resposta do servidor:', response.data); // Log para ver a resposta
      setMensagem(`Usuário criado com sucesso: ${response.data.nome}`);
    } catch (error) {
      console.error('Erro:', error); // Log para ver o erro
      setMensagem(`Erro ao criar usuário: ${error.response?.data?.mensagem || 'Erro desconhecido'}`);
    }
  };

  return (
    <div>
      <NavBar />
    
      <form onSubmit={handleSubmit}>
    
      <h1> Cadastre-se</h1>
          
          <input
            placeholder= 'Digite seu nome'
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            required
          />

          {/* <label>Email:</label> */}
          <input
            placeholder= 'Digite seu email'
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        
          {/* <label>Senha:</label> */}
          <input
            placeholder= 'Digite sua senha'
            type="password"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            required
          />
        
        <button type="submit">Cadastrar</button>
      </form>
      {mensagem && <p>{mensagem}</p>}
    </div>
  );
};

export default CadastroUsuario;
