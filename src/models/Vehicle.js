const mongoose = require('mongoose');

const vehicleSchema = new mongoose.Schema({
  placa: { type: String, required: true, unique: true },
  modelo: { type: String, required: true },
  ano: { type: Number, required: true },
  capacidadeKg: { type: Number, required: true },
  status: { 
    type: String, 
    enum: ['DISPONIVEL', 'EM_MANUTENCAO', 'EM_ROTA'], 
    default: 'DISPONIVEL' 
  }
}, { timestamps: true });

module.exports = mongoose.model('Vehicle', vehicleSchema);
