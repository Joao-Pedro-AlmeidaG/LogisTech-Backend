const Maintenance = require('../models/Maintenance');
const Vehicle = require('../models/Vehicle');

exports.createMaintenance = async ({ veiculoId, descricao, tipo, custo }) => {
  const vehicle = await Vehicle.findById(veiculoId);
  if (!vehicle) throw new Error('Veículo não encontrado.');

  const maintenance = await Maintenance.create({
    veiculo: veiculoId,
    descricao,
    tipo,
    custo
  });

  // Atualiza status do veículo se necessário
  vehicle.status = 'EM_MANUTENCAO';
  await vehicle.save();

  return maintenance;
};

exports.getMaintenancesByVehicle = async (veiculoId) => {
  return await Maintenance.find({ veiculo: veiculoId });
};
