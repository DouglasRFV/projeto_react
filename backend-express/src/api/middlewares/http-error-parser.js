'use strict';

module.exports = (err, req, res, next) => {
  let status = 500;
  const json = {mensagem: 'Erro interno do servidor.'};
  if (err.errors instanceof Object) {
    status = 400;
    json.mensagem = 'Requisição inválida.';
    json.campos = Object.entries(err.errors)
        .reduce((pv, [campo, error]) => {
          pv[campo] = [error.message];
          return pv;
        }, {});
  }
  if (err.status && err.message) {
    json.status = err.status;
    json.mensagem = err.message;
  }
  res.status(status).json(json);
};
