import { Router } from 'express';
import catalogoController from './app/controllers/catalogoController.js';

const router = Router();

//Rotas produto
//router.post('/trabalho2/produtos', ProdutoController.store);
router.get('/desafio-plyr/catalogo', catalogoController.index);
//router.get('/trabalho2/produtos/:id', ProdutoController.show);
//router.put('/trabalho2/produtos/:id', ProdutoController.update);
//router.delete('/trabalho2/produtos/:id', ProdutoController.delete);

export default router;
