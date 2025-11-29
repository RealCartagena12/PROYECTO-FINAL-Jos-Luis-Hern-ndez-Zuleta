const User = require('../models/backend.model');

//  REGISTRO 
exports.register = async (req, res) => {
  const { nombre, email, equipo, password } = req.body;

  if (!nombre || !email || !equipo || !password) {
    return res.status(400).json({ error: 'Todos los campos son obligatorios' });
  }

  try {
    const exists = await User.findOne({ email });
    if (exists) {
      return res.status(400).json({ error: 'El correo ya existe' });
    }

    const newUser = new User({ nombre, email, equipo, password });
    await newUser.save();

    res.status(201).json({ message: 'Usuario registrado exitosamente' });
  } catch (error) {
    console.error('Error en el registro:', error);
    res.status(500).json({ error: 'Error del servidor' });
  }
};



//  LOGIN 
exports.login = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ error: 'Correo y contraseña son obligatorios' });
  }

  try {

    const user = await User.findOne({ email }).select('+password');

    // Si no existe o la contraseña no coincide
    if (!user || user.password !== password) {
      return res.status(401).json({ error: 'Correo o contraseña incorrectos' });
    }

    // Si todo bien
    res.json({
      message: 'Login exitoso',
      user: {
        nombre: user.nombre,
        email: user.email,
        equipo: user.equipo,
      },
    });
  } catch (error) {
    console.error('Error en el login:', error);
    res.status(500).json({ error: 'Error del servidor' });
  }
};

