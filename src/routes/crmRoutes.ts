import { Router } from 'express';
import CrmController from "../controllers/crmController";

const router: Router = Router();

router.get('/', CrmController.getIndex);

export default router;
