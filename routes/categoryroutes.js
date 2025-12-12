const express = require('express');
const router = express.Router();
const { getDataControllerFn, createCategoryControllerFn } = require('../src/category/categoryController');

router.get('/getAll', getDataControllerFn);
router.post('/Create', createCategoryControllerFn);

module.exports = router;
