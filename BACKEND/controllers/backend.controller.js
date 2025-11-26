const User = require('../models/backend.model');

exports.register= async (req, res) => {
    const { nombre, email, equipo, password } = req.body;

    if (!nombre || !email || !equipo || !password) {
        return res.status(400).json({ message: 'Todos los campos son obligatorios' });
    }
    try {
        const exists = await User.findOne({ email });
        if (exists) {
            return  res.status(400).json({ message: 'El correo ya existe' });
        }
        const newUser = new User({ nombre, email, equipo, password });
        await newUser.save();
        res.status(201).json({ message: 'Usuario registrado exitosamente' });
    }catch (error) {
        console.error('Error en el registro:', error);
        res.status(500).json({ message: 'Error del servidor' });
    }
};


// Login controller
exports.login = async (req, res) => {
    const { email, password } = req.body;

    try{
        const user = await User.findOne({ email, password });
        if (!user) {
            return res.status(401).json({ message: 'Correo o contraseña incorrectos' });
        }
    res.json({ message: 'Login exitoso', 
        user: {
            nombre: user.nombre,
            email: user.email,
            equipo: user.equipo
        } 
    });
    }catch (error) {
        console.error('Error en el login:', error);
        res.status(500).json({ message: 'Error del servidor'});
    }

};

