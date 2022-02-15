const nutritionix = require('nutritionix-api');

const info = async (product) => {
  nutritionix.init('f4897813', '6a868f493d95feac2c3920c51b74683f');
  const infoProd = await nutritionix.natural.search(product);
  return infoProd;
};

// info('orange');
module.exports = info;
