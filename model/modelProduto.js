
const mongoose = require('mongoose');

const produtoSchema = new mongoose.Schema({
  produto: {
    type: String,
    required: true,
  },
  valor: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model('Produto', produtoSchema);
