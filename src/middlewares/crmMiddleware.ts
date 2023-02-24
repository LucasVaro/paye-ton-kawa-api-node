import { Request, Response, NextFunction } from 'express';
import CrmController from "../controllers/crmController";

export default class CrmMiddleware {
    static getIndexMiddleware(req: Request, res: Response): void {
        //#swagger.tags = ['CRM']
        //#swagger.description = 'CRM router index'
        /* #swagger.security = [{
            "apiKeyAuth": []
        }] */
        res.send('CRM Index');
    }

    static async getAllCustomersMiddleware(req: Request, res: Response, next: NextFunction): Promise<void> {
        //#swagger.tags = ['CRM']
        //#swagger.description = 'Endpoint to get all customers'
        /* #swagger.security = [{
            "apiKeyAuth": []
        }] */
        try {
            /* #swagger.responses[200] = {
              schema: [{ "$ref": "#/definitions/Customer" }]} */
            const customers = await CrmController.getAllCustomers();
            res.status(200).json(customers);
        } catch (err) {
            next(err);
        }
    }

    static async getCustomerMiddleware(req: Request, res: Response, next: NextFunction): Promise<void> {
        //#swagger.tags = ['CRM']
        //#swagger.description = 'Endpoint to get a specific customer'
        /* #swagger.security = [{
            "apiKeyAuth": []
        }] */
        try {
            /* #swagger.responses[200] = {
              schema: { "$ref": "#/definitions/Customer" }} */
            const id = req.params.id;
            const order = await CrmController.getCustomer(id);
            res.status(200).json(order);
        } catch (err) {
            next(err);
        }
    }

    static async getCustomerOrdersMiddleware(req: Request, res: Response, next: NextFunction): Promise<void> {
        //#swagger.tags = ['CRM']
        //#swagger.description = 'Endpoint to get all orders of a customer'
        /* #swagger.security = [{
            "apiKeyAuth": []
        }] */
        try {
            /* #swagger.responses[200] = {
              schema: [{ "$ref": "#/definitions/Order" }]} */
            const customerId = req.params.customerId;
            console.log(customerId);
            const orders = await CrmController.getCustomerOrders(customerId);
            res.status(200).json(orders);
        } catch (err) {
            next(err);
        }
    }

    static async getCustomerOrderProductsMiddleware(req: Request, res: Response, next: NextFunction): Promise<void> {
        //#swagger.tags = ['CRM']
        //#swagger.description = 'Endpoint to get all products of a customer's order'
        /* #swagger.security = [{
            "apiKeyAuth": []
        }] */
        try {
            /* #swagger.responses[200] = {
              schema: [{ "$ref": "#/definitions/Product" }]} */
            const customerId = req.params.customerId;
            const orderId = req.params.orderId;
            const products = await CrmController.getCustomerOrderProducts(customerId, orderId);
            res.status(200).json(products);
        } catch (err) {
            next(err);
        }
    }
}
