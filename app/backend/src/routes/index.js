const express = require('express');
const factorizeCoefficients = require('../controllers/mathController');
const router = express.Router();

router.post('/roots', async (req, res) => {
  const coefficients = req.body.coefficients
  const factors = factorizeCoefficients(coefficients);
  res.send(factors);
});

module.exports = router;
