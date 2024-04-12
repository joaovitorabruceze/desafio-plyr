import { Router } from 'express';
import catalogoController from './app/controllers/catalogoController.js';

const router = Router();

router.get('/desafio-plyr/catalogo', catalogoController.index);

export default router;
