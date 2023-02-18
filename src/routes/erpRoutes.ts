import { Router } from 'express';
import ErpController from "../controllers/erpController";

const router: Router = Router();

router.get('/', ErpController.getIndex);
router.get('/products', ErpController.getProducts);
router.get('/product', ErpController.getProduct);

export default router;
