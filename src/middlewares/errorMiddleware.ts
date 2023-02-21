import { Request, Response } from 'express'

export default class authMiddleware {
    static handleError(err: Error, req: Request, res: Response) {
        console.error(err.stack)
        res.status(500)
        res.send(err.message)
    }
}
