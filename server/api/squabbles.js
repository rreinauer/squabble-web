const router = require('express').Router();
const { Squabble } = require('../db/models');
module.exports = router;

router.get('/', async (req, res, next) => {
  try {
    const squabbles = await Squabble.findAll();
    res.send(squabbles);
  } catch (error) {
    next(error);
  }
});
