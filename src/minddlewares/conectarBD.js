const mongoose = require("mongoose");

async function conectarBD(req = null, res = null, next = null) {
  try {  
    await mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log('Conectado ao Banco de Dados');
    try { 
      if (next) {
        next();
      }
    } catch (error) {}
    return mongoose;
  } catch (error) {
    console.log(error);
    return error;
  }
}

module.exports = conectarBD;