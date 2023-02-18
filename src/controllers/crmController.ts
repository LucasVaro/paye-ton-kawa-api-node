import { Request, Response, NextFunction } from 'express';

export default class CrmController {
    static getIndex(req: Request, res: Response, next: NextFunction): void {
        res.status(200).json({
            message: 'Informations récupérées avec succès',
            data: '/',
        });
    }
}
