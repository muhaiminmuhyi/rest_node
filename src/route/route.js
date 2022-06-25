const router = require('express').Router();
const { uwu } = require('../controllers');

router.get('/uwu/:id', uwu.getDataNama);
router.post('/uwu/add', uwu.addPacar);

module.exports = router;