'use strict';

const express = require('express');
const router = express.Router();
const sessoesModel = require('../../models/sessoes');
const asyncMiddleware = require('../middlewares/async-middleware');
const {notFound, conflict} = require('../errors');
const {ObjectId} = require('mongoose').Types;

router.get('/', asyncMiddleware(async (req, res) => {
  res.json(await sessoesModel.find({}));
}));

router.post('/', asyncMiddleware(async (req, res) => {
  const {body} = req;
  const existente = await sessoesModel.findOne({
    nome: new RegExp('^' + body.nome + '$', 'i'),
  });
  if (existente)
    throw conflict('Já existe um Sessão com o mesmo Nome.');
  const sessao = await sessoesModel.create(body);
  res.status(201).location(`/sessoes/${sessao.id}`).json(
      {id: sessao.id});
}));

router.get('/:id', asyncMiddleware(async (req, res) => {
  const sessao = await sessoesModel.findById(req.params.id);
  if (!sessao)
    throw notFound('Sessão não encontrada');
  res.json(sessao);
}));

router.put('/:id', asyncMiddleware(async (req, res) => {
  const {body} = req;
  const existente = await sessoesModel.findOne({
    _id: {$ne: new ObjectId(req.params.id)},
    nome: new RegExp('^' + body.nome + '$', 'i'),
  });
  if (existente)
    throw conflict('Já existe uma sessão com o mesmo Nome.');
  if (!await sessoesModel.findByIdAndUpdate(req.params.id, body))
    throw notFound('Sessão não encontrada');
  res.status(204).send();
}));

router.delete('/:id', asyncMiddleware(async (req, res) => {
  if (!await sessoesModel.findByIdAndDelete(req.params.id))
    throw notFound('Sessão não encontrada');
  res.status(204).send();
}));

module.exports = router;
