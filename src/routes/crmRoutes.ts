import { Router } from 'express';
import CrmMiddleware from "../middlewares/crmMiddleware";

const router: Router = Router();

router.get('/', CrmMiddleware.getIndexMiddleware);

router.get('/customers', CrmMiddleware.getAllCustomersMiddleware);

router.get('/customers/:id', CrmMiddleware.getCustomerMiddleware);

router.get('/customers/:customerId/orders', CrmMiddleware.getCustomerOrdersMiddleware);

router.get('/customers/:customerId/orders/:orderId', CrmMiddleware.getCustomerOrderProductsMiddleware);

export default router;
