const mongoose = require('mongoose');

const maintenanceSchema = new mongoose.Schema({
  veiculo: { type: mongoose.Schema.Types.ObjectId, ref: 'Vehicle', required: true },
  descricao: { type: String, required: true },
  tipo: { type: String, enum: ['PREVENTIVA', 'CORRETIVA'], required: true },
  custo: { type: Number, default: 0 },
  dataManutencao: { type: Date, default: Date.now }
}, { timestamps: true });

module.exports = mongoose.model('Maintenance', maintenanceSchema);
