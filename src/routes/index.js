const express = require('express');
const router = express.Router();

const authRoutes = require('./authRoutes');
const userRoutes = require('./userRoutes');
const vehicleRoutes = require('./vehicleRoutes');
const maintenanceRoutes = require('./maintenanceRoutes');
const deliveryRoutes = require('./deliveryRoutes');

router.use('/auth', authRoutes);
router.use('/users', userRoutes);
router.use('/vehicles', vehicleRoutes);
router.use('/maintenances', maintenanceRoutes);
router.use('/deliveries', deliveryRoutes);

module.exports = router;
