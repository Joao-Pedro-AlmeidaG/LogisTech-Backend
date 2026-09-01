const Vehicle = require('../models/Vehicle');
const Maintenance = require('../models/Maintenance');
const Delivery = require('../models/Delivery');

const resolvers = {
  Query: {
    dashboardGestor: async (_, __, context) => {
      if (!context.usuario || context.usuario.perfil !== 'GESTOR') {
        throw new Error('Acesso não autorizado. Apenas gestores podem visualizar o dashboard.');
      }

      const vehicles = await Vehicle.find();

      return Promise.all(
        vehicles.map(async (vehicle) => {
          const maintenances = await Maintenance.find({ veiculo: vehicle._id });
          const deliveries = await Delivery.find({ veiculo: vehicle._id }).populate('motorista');

          return {
            id: vehicle._id,
            placa: vehicle.placa,
            modelo: vehicle.modelo,
            ano: vehicle.ano,
            capacidadeKg: vehicle.capacidadeKg,
            status: vehicle.status,
            maintenances,
            deliveries
          };
        })
      );
    }
  }
};

module.exports = resolvers;
