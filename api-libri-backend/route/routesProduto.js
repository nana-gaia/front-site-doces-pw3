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
router.delete('/', async (req, res) => {
  const { id_doce } = req.params;  // Pega o ID do doce da URL

  try {
    // Busca e deleta o produto pelo ID
    const produtoExcluido = await Produto.findByIdAndDelete(id_doce);

    // Se o produto não existir
    if (!produtoExcluido) {
      return res.status(404).json({ mensagem: 'Produto não encontrado' });
    }

    // Produto excluído com sucesso
    res.status(200).json({ mensagem: 'Produto excluído com sucesso!', produtoExcluido });
  } catch (err) {
    res.status(500).json({ mensagem: 'Erro ao excluir produto', error: err });
  }
});

// Rota para atualizar um produto pelo ID
router.put('/atualizarProduto/:id_doce', async (req, res) => {
  const { id_doce } = req.params;  // Pega o ID do doce da URL
  const dadosAtualizados = req.body;  // Dados para atualização

  try {
    // Validação de preço (se necessário)
    if (dadosAtualizados.valor && isNaN(dadosAtualizados.valor)) {
      return res.status(400).json({ mensagem: 'Preço inválido' });
    }

    // Busca e atualiza o produto pelo ID
    const produtoAtualizado = await Produto.findByIdAndUpdate(id_doce, dadosAtualizados, { new: true });

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
