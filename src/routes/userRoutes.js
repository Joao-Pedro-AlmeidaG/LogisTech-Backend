const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const authMiddleware = require('../middlewares/authMiddleware');
const roleMiddleware = require('../middlewares/roleMiddleware');

router.get('/', authMiddleware, roleMiddleware(['GESTOR']), userController.getAll);
router.get('/:id', authMiddleware, userController.getById);

module.exports = router;
