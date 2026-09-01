const express = require('express');
const router = express.Router();
const deliveryController = require('../controllers/deliveryController');
const authMiddleware = require('../middlewares/authMiddleware');

router.get('/rastreio/:codigo_rastreio', deliveryController.getByTrackingCode); // Rota Pública
router.post('/', authMiddleware, deliveryController.create);
router.put('/:id/status', authMiddleware, deliveryController.updateStatus);
router.get('/', authMiddleware, deliveryController.getAll);

module.exports = router;
