const express = require('express');
const router = express.Router();
const providerController = require('../controllers/provider.controllers');
const { validateProvider } = require('../validators/provider.validators');
const validate = require('../middlewares/validation');

router.get('/', providerController.getAllProviders);
router.post('/', validateProvider, validate, providerController.createProvider);
router.put('/', validateProvider, validate, providerController.updateProvider);
router.delete('/', validateProvider, validate, providerController.deleteProvider);

module.exports = router;






