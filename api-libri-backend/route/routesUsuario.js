const express = require('express');
const router = express.Router();
const Usuario = require('../model/modelUsuario');

// Rota para criar um novo usuário
router.post('/', async (req, res) => {
  try {
    const novoUsuario = new Usuario(req.body); // Cria uma nova instância do usuário com os dados recebidos
    await novoUsuario.save(); // Salva o novo usuário no banco de dados
    res.status(201).json(novoUsuario); // Retorna o usuário criado com status 201
  } catch (error) {
    res.status(400).json({ mensagem: 'Erro ao criar usuário', error }); // Retorna erro se não puder criar
  }
});

module.exports = router; // Exporta as rotas para uso no servidor
