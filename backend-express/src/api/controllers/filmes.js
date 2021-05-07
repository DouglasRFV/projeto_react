'use strict';

const express = require('express');
const router = express.Router();
const filmeModel = require('../../models/filme');
const asyncMiddleware = require('../middlewares/async-middleware');
const {notFound, conflict} = require('../errors');
const {ObjectId} = require('mongoose').Types;

router.get('/', asyncMiddleware(async (req, res) => {
  res.json(await filmeModel.find({}));
}));

router.post('/', asyncMiddleware(async (req, res) => {
  const {body} = req;
  const existente = await filmeModel.findOne({
    nome: new RegExp('^' + body.nome + '$', 'i'),
  });
  if (existente)
    throw conflict('Já existe um Filme com o mesmo Nome.');
  const filme = await filmeModel.create(body);
  res.status(201).location(`/filmes/${filme.id}`).json(
      {id: filme.id});
}));

router.get('/:id', asyncMiddleware(async (req, res) => {
  const filme = await filmeModel.findById(req.params.id);
  if (!filme)
    throw notFound('Filme não encontrado');
  res.json(filme);
}));

router.put('/:id', asyncMiddleware(async (req, res) => {
  const {body} = req;
  const existente = await filmeModel.findOne({
    _id: {$ne: new ObjectId(req.params.id)},
    nome: new RegExp('^' + body.nome + '$', 'i'),
  });
  if (existente)
    throw conflict('Já existe um Filme com o mesmo Nome.');
  if (!await filmeModel.findByIdAndUpdate(req.params.id, body))
    throw notFound('Filme não encontrado');
  res.status(204).send();
}));

router.delete('/:id', asyncMiddleware(async (req, res) => {
  if (!await filmeModel.findByIdAndDelete(req.params.id))
    throw notFound('Filme não encontrado');
  res.status(204).send();
}));

module.exports = router;
