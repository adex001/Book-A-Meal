import express from 'express';
import menuController from '../controller/menuController';

const router = express.Router();

// Router to get the menu for the day
router.post('/menu', menuController.createMenu);

// Router to setup a menu
router.get('/menu', menuController.getMenu);

export default router;
