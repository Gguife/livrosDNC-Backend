const express = require('express');
const router = require('./src/routes')
const app = express();
const path = require('path');
require('dotenv').config();

const PORT = process.env.PORT || 4000;

//Config express
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

//Rotas
app.use(router);

//Servidor
app.listen(PORT, () =>{
  console.log(`Servidor rodando na porta ${PORT}`);
})


