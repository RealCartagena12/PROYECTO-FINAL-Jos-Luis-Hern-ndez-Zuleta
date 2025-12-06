const express = require('express');
const router = express.Router();
const { register, login } = require('../controllers/backend.controller');
const auth = require('../middleware/backend.authmiddleware');





router.post('/registrar', register);
router.post('/logear', login);

// RUTA PRIVADA
router.get('/perfil', auth, (req, res) => {
    res.json({ message: 'Acceso concedido a la ruta privada', user: req.user 
        
    });     
});

module.exports = router;