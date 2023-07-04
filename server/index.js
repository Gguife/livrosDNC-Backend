const express = require('express');

const app = express();
require('dotenv').config();

const PORT = process.env.PORT || 3000;

app.get("/livros", (req, res) => {
  res.json({mensagem: "Hello from server!"});
})

app.listen(PORT, () =>{
  console.log(`Servidor rodando na porta ${PORT}`);
})


