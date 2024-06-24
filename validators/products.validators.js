const { body } = require('express-validator');

const validateProduct = [
  body('title')
    .notEmpty()
    .withMessage('Title is required')
    .isString()
    .withMessage('Title must be a string'),
  body('price')
    .notEmpty()
    .withMessage('Price is required')
    .isFloat({ gt: 0 })
    .withMessage('Price must be a positive number'),
  body('description')
    .notEmpty()
    .withMessage('Description is required')
    .isString()
    .withMessage('Description must be a string'),
  body('providerName')
    .notEmpty()
    .withMessage('Provider name is required')
    .isString()
    .withMessage('Provider name must be a string')
];

module.exports = {
  validateProduct
};