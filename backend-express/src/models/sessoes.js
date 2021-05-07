'use strict';

const mongoose = require('mongoose');
const {defaultTransform} = require('./_utils');

const sessoesSchema = new mongoose.Schema({
  cinema: {
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'cinema'
  },
  filme: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'filme'
  },
  domingo: {type: Boolean, required: true, minlength: 2, maxlength: 10},
  segunda: {type: Boolean, required: true, minlength: 2, maxlength: 10},
  terca: {type: Boolean, required: true, minlength: 2, maxlength: 10},
  quarta: {type: Boolean, required: true, minlength: 2, maxlength: 10},
  quinta: {type: Boolean, required: true, minlength: 2, maxlength: 10},
  sexta: {type: Boolean, required: true, minlength: 2, maxlength: 10},
  sabado: {type: Boolean, required: true, minlength: 2, maxlength: 10},

  quinze: {type: Boolean, required: true, minlength: 2, maxlength: 10},
  dezoito: {type: Boolean, required: true, minlength: 2, maxlength: 10},
  vinteUm: {type: Boolean, required: true, minlength: 2, maxlength: 10},
});

sessoesSchema.virtual('id').get(function() {
  return this._id;
});

sessoesSchema.set('toJSON', {
  transform: defaultTransform,
});

module.exports = mongoose.model('sessoes', sessoesSchema);
