const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    nombre : { type: String, required: true },
    email : { type: String, required: true, unique: true },
    equipo : { type: String, required: true },
    password : { type: String, required: true, select: false, minlength: 6 },
});

module.exports = mongoose.model('User', userSchema);