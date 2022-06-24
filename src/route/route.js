const router = require('express').Router();
const { uwu } = require('../controllers');

router.get('/uwu/:id', uwu.getDataNama);

module.exports = router;