import express from 'express';
import menuController from '../controller/menuController';
import verifyToken from '../middleware/jwt';

const router = express.Router();

// Router to get the menu for the day
router.post('/menu', verifyToken, menuController.createMenu);

// Router to setup a menu
router.get('/menu', verifyToken, menuController.getMenu);

module.exports = router;
