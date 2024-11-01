const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const usuarioRoutes = require('./route/routesUsuario')
const produtoRoutes = require('./route/routesProduto')

const app = express();
app.use(express.json()); // Permite que a API receba JSON
app.use(cors());
// Conexão com o MongoDB
mongoose.connect('mongodb+srv://geovannacarol2003:tngpccca@back-site.vjsnh.mongodb.net/?retryWrites=true&w=majority&appName=back-site', {
  
})
.then(() => console.log('MongoDB conectado'))
.catch(err => console.error(err));

// Usar as rotas
app.use('/usuarios', usuarioRoutes); 
app.use('/produtos', produtoRoutes); 

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
