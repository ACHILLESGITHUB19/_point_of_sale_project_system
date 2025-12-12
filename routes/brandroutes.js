const express = require('express');
const router = express.Router();
const { getDataControllerFn, createbrandControllerFn } = require('../src/brand/brandController');

router.get('/getAll', getDataControllerFn);
router.post('/Create', createbrandControllerFn);

module.exports = router;
