const express = require('express');
const router = express.Router();
const { getDataControllerFn, createProductControllerFn } = require('../src/product/productController');

router.get('/getAll', getDataControllerFn);
router.post('/Create', createProductControllerFn);

module.exports = router;
