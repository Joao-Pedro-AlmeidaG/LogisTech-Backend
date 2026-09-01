const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  senha: { type: String, required: true },
  perfil: { type: String, enum: ['GESTOR', 'MOTORISTA'], default: 'MOTORISTA' }
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);
