import { Request, Response, NextFunction } from 'express';
import CrmController from "../controllers/crmController";

export default class CrmMiddleware {
    static getIndexMiddleware(req: Request, res: Response): void {
        res.send('CRM Index');
    }

    static async getAllCustomersMiddleware(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const customers = await CrmController.getAllCustomers();
            res.status(200).json(customers);
        } catch (err) {
            next(err);
        }
    }

    static async getCustomerMiddleware(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const id = req.params.id;
            const order = await CrmController.getCustomer(id);
            res.status(200).json(order);
        } catch (err) {
            next(err);
        }
    }

    static async getCustomerOrdersMiddleware(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const customerId = req.params.customerId;
            console.log(customerId);
            const orders = await CrmController.getCustomerOrders(customerId);
            res.status(200).json(orders);
        } catch (err) {
            next(err);
        }
    }

    static async getCustomerOrderProductsMiddleware(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const customerId = req.params.customerId;
            const orderId = req.params.orderId;
            const products = await CrmController.getCustomerOrderProducts(customerId, orderId);
            res.status(200).json(products);
        } catch (err) {
            next(err);
        }
    }
}
