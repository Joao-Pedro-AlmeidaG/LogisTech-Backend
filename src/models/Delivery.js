const mongoose = require('mongoose');

const deliverySchema = new mongoose.Schema({
  codigoRastreio: { type: String, required: true, unique: true },
  origem: { type: String, required: true },
  destino: { type: String, required: true },
  status: { 
    type: String, 
    enum: ['PENDENTE', 'EM_TRANSITO', 'ENTREGUE', 'PROBLEMA'], 
    default: 'PENDENTE' 
  },
  motorista: { type: mongoose.Schema.Types.ObjectId, ref: 'User', default: null },
  veiculo: { type: mongoose.Schema.Types.ObjectId, ref: 'Vehicle', default: null }
}, { timestamps: true });

module.exports = mongoose.model('Delivery', deliverySchema);
