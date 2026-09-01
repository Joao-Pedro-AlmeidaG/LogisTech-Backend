const express = require('express');
const router = express.Router();
const vehicleController = require('../controllers/vehicleController');
const authMiddleware = require('../middlewares/authMiddleware');
const roleMiddleware = require('../middlewares/roleMiddleware');

router.post('/', authMiddleware, roleMiddleware(['GESTOR']), vehicleController.create);
router.get('/', authMiddleware, vehicleController.getAll);

module.exports = router;
