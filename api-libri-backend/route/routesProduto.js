const express = require('express');
const router = express.Router();
const Produto = require('../model/modelProduto'); 

router.post('/', async (req, res) => {
  try {
    console.log(req.body); 
    if (isNaN(req.body.valor)) {
      return res.status(400).json({ mensagem: 'Preço inválido' });
    }
    const novoProduto = new Produto(req.body);
    await novoProduto.save();
    res.status(201).json(novoProduto);
  } catch (error) {
    res.status(400).json({ mensagem: 'Erro ao criar produto', error });
  }
});



router.get('/', async (req, res) => {  
  try {
      const doces = await Produto.find(); 
      res.json({ data: doces });
  } catch (err) {
      res.status(500).json({ error: 'Erro ao buscar dados' });
  }
});

module.exports = router; 
