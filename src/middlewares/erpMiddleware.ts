import {NextFunction, Request, Response} from "express";
import ErpController from "../controllers/erpController";

export default class ErpMiddleware {
    static getIndex(req: Request, res: Response): void {
        res.send('ERP Controller');
    }

    static async getProductMiddleware(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const id = req.params.id;
            const product = await ErpController.getProduct(id);
            res.status(200).json(product);
        } catch (err) {
            next(err);
        }
    }

    static async getAllProductsMiddleware(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const products = await ErpController.getProducts();
            res.status(200).json(products);
        } catch (err) {
            next(err);
        }
    }
}
