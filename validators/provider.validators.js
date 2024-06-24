const { body } = require('express-validator');

const validateProvider = [
  body('company_name')
    .notEmpty()
    .withMessage('Company name is required')
    .isString()
    .withMessage('Company name must be a string'),
  body('cif')
    .notEmpty()
    .withMessage('CIF is required')
    .isString()
    .withMessage('CIF must be a string'),
  body('address')
  .notEmpty()
  .withMessage('Address is required')
  .isString()
  .withMessage('Address must be a string'),
  body('url_web')
  .notEmpty()
  .withMessage('URL is required')
  .isURL()
  .withMessage('Invalid URL format')
];

module.exports = {
  validateProvider
};

