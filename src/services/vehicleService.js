const Vehicle = require('../models/Vehicle');

exports.createVehicle = async ({ placa, modelo, ano, capacidadeKg }) => {
  const existingVehicle = await Vehicle.findOne({ placa });
  if (existingVehicle) {
    throw new Error('Placa já cadastrada no sistema.');
  }
  return await Vehicle.create({ placa, modelo, ano, capacidadeKg });
};

exports.getAllVehicles = async () => {
  return await Vehicle.find();
};

exports.getVehicleById = async (id) => {
  const vehicle = await Vehicle.findById(id);
  if (!vehicle) throw new Error('Veículo não encontrado.');
  return vehicle;
};
