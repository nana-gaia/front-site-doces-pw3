const express = require('express');
const router = express.Router();
const Usuario = require('../model/modelUsuario');


router.post('/', async (req, res) => {
  try {
    const novoUsuario = new Usuario(req.body); 
    await novoUsuario.save(); 
    res.status(201).json(novoUsuario); 
  } catch (error) {
    res.status(400).json({ mensagem: 'Erro ao criar usuário', error }); 
  }
});

module.exports = router; 
