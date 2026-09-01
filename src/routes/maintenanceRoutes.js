const express = require('express');
const router = express.Router();
const maintenanceController = require('../controllers/maintenanceController');
const authMiddleware = require('../middlewares/authMiddleware');
const roleMiddleware = require('../middlewares/roleMiddleware');

router.post('/', authMiddleware, roleMiddleware(['GESTOR']), maintenanceController.create);
router.get('/veiculo/:veiculoId', authMiddleware, maintenanceController.getByVehicle);

module.exports = router;
