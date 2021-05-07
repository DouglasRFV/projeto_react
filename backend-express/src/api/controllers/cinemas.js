'use strict';

const express = require('express');
const router = express.Router();
const cinemaModel = require('../../models/cinema');
const asyncMiddleware = require('../middlewares/async-middleware');
const {notFound, conflict} = require('../errors');
const {ObjectId} = require('mongoose').Types;

router.get('/', asyncMiddleware(async (req, res) => {
  res.json(await cinemaModel.find({}));
}));

router.post('/', asyncMiddleware(async (req, res) => {
  const {body} = req;
  const existente = await cinemaModel.findOne({
    nome: new RegExp('^' + body.nome + '$', 'i'),
  });
  if (existente)
    throw conflict('Já existe um Cinema com o mesmo Nome.');
  const cinema = await cinemaModel.create(body);
  res.status(201).location(`/cinemas/${cinema.id}`).json(
      {id: cinema.id});
}));

router.get('/:id', asyncMiddleware(async (req, res) => {
  const cinema = await cinemaModel.findById(req.params.id);
  if (!cinema)
    throw notFound('Cinema não encontrado');
  res.json(cinema);
}));

router.put('/:id', asyncMiddleware(async (req, res) => {
  const {body} = req;
  const existente = await cinemaModel.findOne({
    _id: {$ne: new ObjectId(req.params.id)},
    nome: new RegExp('^' + body.nome + '$', 'i'),
  });
  if (existente)
    throw conflict('Já existe um Cinema com o mesmo Nome.');
  if (!await cinemaModel.findByIdAndUpdate(req.params.id, body))
    throw notFound('Cinema não encontrado');
  res.status(204).send();
}));

router.delete('/:id', asyncMiddleware(async (req, res) => {
  if (!await cinemaModel.findByIdAndDelete(req.params.id))
    throw notFound('Cinema não encontrado');
  res.status(204).send();
}));

module.exports = router;
