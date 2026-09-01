const maintenanceService = require('../services/maintenanceService');

exports.create = async (req, res, next) => {
  try {
    const maintenance = await maintenanceService.createMaintenance(req.body);
    res.status(201).json(maintenance);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getByVehicle = async (req, res, next) => {
  try {
    const list = await maintenanceService.getMaintenancesByVehicle(req.params.veiculoId);
    res.json(list);
  } catch (error) {
    next(error);
  }
};
