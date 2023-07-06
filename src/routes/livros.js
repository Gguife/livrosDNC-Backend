const express = require('express');
const conectarBancoDados = require('../minddlewares/conectarBD');
const tratarErros = require('../functions/tratarErros');
const EsquemaLivros = require('../models/livros');
const router = express.Router();

/* GET users listing. */
router.get('/', conectarBancoDados, async function(req, res) {
  try {
    const livros = await EsquemaLivros.find();

    res.status(200).json({
      status: "OK",
      statusMensagem: "Lista de livros obtida com sucesso",
      resposta: livros
    });
  } catch (error) {
    return tratarErros(res, error);
  }
});

router.post('/cadastro', conectarBancoDados, async function(req, res) {
  try{
    // #swagger.tags = ['Tarefa']
    let {id, titulo, numeroPaginas, codigoISBN, editora} = req.body;
    const respostaBD = await EsquemaLivros.create({id, titulo, numeroPaginas, codigoISBN, editora});
    
    res.status(200).json({
      status: "OK",
      statusMensagem: "Tarefa criada com sucesso",
      resposta: respostaBD
    })
  }catch (error){
    return tratarErros(res, error);
  }
});

router.put('/editar/:id', conectarBancoDados, async function(req, res) {
  try{
    let idLivro = req.params.id;
    let {id, titulo, numeroPaginas, codigoISBN, editora} = req.body;

    const checkLivro = await EsquemaLivros.findOne({ _id: idLivro});
    if(!checkLivro){
      throw new Error("Tarefa não encontrada ou pertence a outro usuário");
    }
    
    const livroAtualizado = await EsquemaLivros.updateOne({_id: idLivro}, {id, titulo, numeroPaginas, codigoISBN, editora});
    if(livroAtualizado?.modifiedCount > 0){
      const dadosLivro = await EsquemaLivros.findOne({_id: idLivro});

      res.status(200).json({
        status: "OK",
        statusMensagem: "Tarefa criada com sucesso",
        resposta: dadosLivro
      })
    }

  }catch (error){
    return tratarErros(res, error);
  }
});

router.delete('/deletar/:id',conectarBancoDados, async function(req, res) {
  try{
    const idLivro = req.params.id;

    const checkLivro = await EsquemaLivros.findOne({ _id: idLivro});
    if(!checkLivro){
      throw new Error("Tarefa não encontrada ou pertence a outro usuário");
    }

    const respostaBD = await EsquemaLivros.deleteOne({_id: idLivro});
    res.status(200).json({
      status: "OK",
      statusMensagem: "Tarefas deletada com sucesso",
      resposta: respostaBD
    })
  }catch (error){
    return tratarErros(res, error);
  }
});
