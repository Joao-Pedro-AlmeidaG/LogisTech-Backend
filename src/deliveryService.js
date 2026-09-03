const Delivery = require('../models/Delivery');
const Vehicle = require('../models/Vehicle');
const generateTrackingCode = require('../utils/generateTrackingCode');

exports.createDelivery = async ({ codigoRastreio, origem, destino, motoristaId, veiculoId }) => {
  if (veiculoId) {
    const vehicle = await Vehicle.findById(veiculoId);
    if (!vehicle) throw new Error('Veículo não encontrado.');
    if (vehicle.status === 'EM_MANUTENCAO') {
      throw new Error('Não é possível alocar uma entrega a um veículo em manutenção.');
    }
  }

  const finalCode = codigoRastreio || generateTrackingCode();

  return await Delivery.create({
    codigoRastreio: finalCode,
    origem,
    destino,
    motorista: motoristaId || null,
    veiculo: veiculoId || null
  });
};

exports.updateStatus = async (id, status) => {
  const delivery = await Delivery.findById(id);
  if (!delivery) throw new Error('Entrega não encontrada.');

  delivery.status = status;
  await delivery.save();
  return delivery;
};

exports.getByTrackingCode = async (codigoRastreio) => {
  const delivery = await Delivery.findOne({ codigoRastreio })
    .populate('motorista', 'nome')
    .populate('veiculo', 'modelo placa');

  if (!delivery) throw new Error('Código de rastreio não encontrado.');

  return {
    codigoRastreio: delivery.codigoRastreio,
    origem: delivery.origem,
    destino: delivery.destino,
    status: delivery.status,
    atualizadoEm: delivery.updatedAt
  };
};

exports.getAllDeliveries = async () => {
  return await Delivery.find().populate('motorista', 'nome').populate('veiculo', 'placa modelo');
};
