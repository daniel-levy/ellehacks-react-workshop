const factor = require('../services/factor');

const factorizeCoefficients = (coefficients) => {
  return factor(coefficients.a, coefficients.b, coefficients.c)
}

module.exports = factorizeCoefficients;
