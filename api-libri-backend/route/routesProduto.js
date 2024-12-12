const express = require('express');
const router = express.Router();
const Produto = require('../model/modelProduto'); 

// Rota para criar um novo produto
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

// Rota para buscar todos os produtos
router.get('/', async (req, res) => {  
  try {
      const doces = await Produto.find(); 
      res.json({ data: doces });
  } catch (err) {
      res.status(500).json({ error: 'Erro ao buscar dados' });
  }
});


// Rota para excluir um produto pelo ID
router.delete('/delete/:id', async (req, res) => {
  const { id } = req.params;  // Corrigido para "id" (mesmo nome da URL)

  try {
    const produtoExcluido = await Produto.findByIdAndDelete(id);  // Usando "id" aqui

    if (!produtoExcluido) {
      return res.status(404).json({ mensagem: 'Produto não encontrado' });
    }

    res.status(200).json({ mensagem: 'Produto excluído com sucesso!' });
  } catch (err) {
    res.status(500).json({ mensagem: 'Erro ao excluir produto', error: err });
  }
});

// Rota para atualizar um produto pelo ID
router.put('/update/:id', async (req, res) => {
  const { id } = req.params;  // Corrigido para "id" (mesmo nome da URL)
  const dadosAtualizados = req.body;  // Dados para atualização

  try {
    // Validação de preço (se necessário)
    if (dadosAtualizados.valor && isNaN(dadosAtualizados.valor)) {
      return res.status(400).json({ mensagem: 'Preço inválido' });
    }

    // Busca e atualiza o produto pelo ID
    const produtoAtualizado = await Produto.findByIdAndUpdate(id, dadosAtualizados, { new: true });  // Usando "id" aqui

    // Se o produto não for encontrado
    if (!produtoAtualizado) {
      return res.status(404).json({ mensagem: 'Produto não encontrado' });
    }

    // Produto atualizado com sucesso
    res.status(200).json({ mensagem: 'Produto atualizado com sucesso!', produtoAtualizado });
  } catch (err) {
    res.status(500).json({ mensagem: 'Erro ao atualizar produto', error: err });
  }
});

module.exports = router;
