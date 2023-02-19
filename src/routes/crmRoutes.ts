import { Router } from 'express';
import CrmMiddleware from "../middlewares/crmMiddleware";

const router: Router = Router();

router.get('/', CrmMiddleware.getIndexMiddleware);

router.get('/customers', CrmMiddleware.getAllCustomersMiddleware);

router.get('/customers/:id', CrmMiddleware.getCustomerMiddleware);

router.get('/orders/:customerId', CrmMiddleware.getCustomerOrdersMiddleware);

router.get('/orders/:customerId/:orderId', CrmMiddleware.getCustomerOrderProductsMiddleware);

export default router;
