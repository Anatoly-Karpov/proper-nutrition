const express = require('express');
const nutritionix = require('nutritionix-api');

const info = require('../appiFunction');

const router = express.Router();

/* GET home page. */
router.get('/', async (req, res) => {
  res.render('stats');
});

router.post('/', async (req, res) => {
  const { product } = req.body;
  try {
    const stats = await info(product);
    res.json(stats.foods[0]);
  } catch (error) {
    console.log(error);
    res.sendStatus(401);
  }
});

module.exports = router;

