const express = require('express');
const router = express.Router();
const { register, login } = require('../controllers/backend.controller');

router.post('/registrar', register);
router.post('/logear', login);

module.exports = router;