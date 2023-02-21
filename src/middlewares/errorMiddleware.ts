import { Request, Response, NextFunction } from 'express'

export default class authMiddleware {
    static handleError(
        err: Error,
        req: Request,
        res: Response,
        next: NextFunction
    ) {
        console.error(err.stack)
        res.status(500)
        res.send(err.message)
    }
}
