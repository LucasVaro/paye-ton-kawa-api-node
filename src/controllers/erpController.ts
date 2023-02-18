import { Request, Response, NextFunction } from 'express';

export default class ErpController {
    static getIndex(req: Request, res: Response, next: NextFunction): void {
        res.status(200).json({
            message: 'Informations récupérées avec succès',
            data: '/',
        });
    }

    static getProduct(req: Request, res: Response, next: NextFunction): void {
        res.status(200).json({
            message: 'Informations récupérées avec succès',
            data: 'Product',
        });
    }

    static getProducts(req: Request, res: Response, next: NextFunction): void {
        res.status(200).json({
            message: 'Informations récupérées avec succès',
            data: 'Products',
        });
    }
}
