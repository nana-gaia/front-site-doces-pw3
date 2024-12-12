const express = require('express');
const Produto = require('../model/modelProduto');  // Ajuste o caminho do modelo conforme necessário
const router = express.Router();

// Rota para buscar detalhes de um produto específico
router.get('/detalhes/:id', async (req, res) => {  // O id é agora um parâmetro de URL
  try {
    const produto = await Produto.findById(req.params.id);  // Busca o produto pelo id
    if (!produto) {
      return res.status(404).json({ error: 'Produto não encontrado' }); // Se o produto não for encontrado
    }
    res.json(produto); // Retorna o produto
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Erro ao buscar produto' }); // Caso ocorra algum erro no servidor
  }
});

module.exports = router;
