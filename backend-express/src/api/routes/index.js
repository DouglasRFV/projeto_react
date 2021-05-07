'use strict';

const express = require('express');
const httpErrorParser = require('../middlewares/http-error-parser');
const http404Response = require('../middlewares/http-404-response');
const router = express.Router();

router.use('/filmes', require('../controllers/filmes'));
router.use('/cinemas', require('../controllers/cinemas'));
router.use('/sessoes', require('../controllers/sessoes'));
router.use(httpErrorParser);
router.use(http404Response);

module.exports = router;
