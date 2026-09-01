const deliveryService = require('../services/deliveryService');

exports.create = async (req, res, next) => {
  try {
    const delivery = await deliveryService.createDelivery(req.body);
    res.status(201).json(delivery);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.updateStatus = async (req, res, next) => {
  try {
    const delivery = await deliveryService.updateStatus(req.params.id, req.body.status);
    res.json(delivery);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getByTrackingCode = async (req, res, next) => {
  try {
    const tracking = await deliveryService.getByTrackingCode(req.params.codigo_rastreio);
    res.json(tracking);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

exports.getAll = async (req, res, next) => {
  try {
    const deliveries = await deliveryService.getAllDeliveries();
    res.json(deliveries);
  } catch (error) {
    next(error);
  }
};
