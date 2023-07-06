const mongoose = require('mongoose');

const esquema = new mongoose.Schema(
  {
    id:{
      type: Number,
      required: 'é obrigatório'
    },
    titulo:{
      type: String,
      default: 'é obrigatório'
    },
    numeroPaginas:{
      type: Number,
      default: 'é obrigatório'
    },
    codigoISBN:{
      type: Number,
      defautl: 'é obrigatório'
    },
    editora:{
      type: String,
      default: 'é obrigatório'
    }
  }
);

const EsquemaLivros = mongoose.models.Livros || mongoose.model('Livros', esquema);
module.exports = EsquemaLivros;