import { Router } from 'express';
import ErpMiddleware from "../middlewares/erpMiddleware";

const router: Router = Router();

router.get('/', ErpMiddleware.getIndex);

router.get('/products/:id', ErpMiddleware.getProductMiddleware);

router.get('/products', ErpMiddleware.getAllProductsMiddleware);

export default router;
