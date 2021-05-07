'use strict';

const mongoose = require('mongoose');
const {defaultTransform} = require('./_utils');

const cinemaSchema = new mongoose.Schema({
  nome: {type: String, required: true, minlength: 2, maxlength: 100},
  cidade: {type: String, required: true, minlength: 2, maxlength: 100},
  estado: {type: String, required: true, minlength: 2, maxlength: 100},
});

cinemaSchema.virtual('id').get(function() {
  return this._id;
});

cinemaSchema.set('toJSON', {
  transform: defaultTransform,
});

module.exports = mongoose.model('cinema', cinemaSchema);
