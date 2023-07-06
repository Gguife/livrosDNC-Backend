function routes(app) {
  app.use('/usuario', require('./routes/livros.js'));
  return;
}

module.exports = routes;