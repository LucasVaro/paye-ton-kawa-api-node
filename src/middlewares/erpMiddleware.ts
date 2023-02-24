import {NextFunction, Request, Response} from "express";
import ErpController from "../controllers/erpController";

export default class ErpMiddleware {
    static getIndex(req: Request, res: Response): void {
        //#swagger.tags = ['ERP']
        //#swagger.description = 'ERP router index'
        /* #swagger.security = [{
            "apiKeyAuth": []
        }] */
        res.send('ERP Controller');
    }

    static async getAllProductsMiddleware(req: Request, res: Response, next: NextFunction): Promise<void> {
        //#swagger.tags = ['ERP']
        //#swagger.description = 'Endpoint to get all products'
        /* #swagger.security = [{
            "apiKeyAuth": []
        }] */
        try {
            /* #swagger.responses[200] = {
              schema: [{ "$ref": "#/definitions/Product" }]} */
            const products = await ErpController.getProducts();
            res.status(200).json(products);
        } catch (err) {
            next(err);
        }
    }

    static async getProductMiddleware(req: Request, res: Response, next: NextFunction): Promise<void> {
        //#swagger.tags = ['ERP']
        //#swagger.description = 'Endpoint to get a specific product'
        /* #swagger.security = [{
            "apiKeyAuth": []
        }] */
        try {
            const id = req.params.id;
            const product = await ErpController.getProduct(id);
            /* #swagger.responses[200] = {
              schema: { "$ref": "#/definitions/Product" }} */
            res.status(200).json(product);
        } catch (err) {
            next(err);
        }
    }
}
