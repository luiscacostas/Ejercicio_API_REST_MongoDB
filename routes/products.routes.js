const express = require('express');
const router = express.Router();
const productController = require('../controllers/products.controllers');
const { validateProduct } = require('../validators/products.validators');
const validate = require('../middlewares/validation');

router.get('/', productController.getAllProducts);
router.post('/', validateProduct, validate, productController.createProduct);
router.put('/', validateProduct, validate, productController.updateProduct);
router.delete('/',validateProduct, validate, productController.deleteProduct);

module.exports = router;



