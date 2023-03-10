import jwt from 'jsonwebtoken'
import { Request, Response, NextFunction } from 'express'
import { PUBLIC_KEY } from '../models/constant'

export default class authMiddleware {
    static verifyToken(req: Request, res: Response, next: NextFunction) {
        const token = req.headers['authorization']
        console.log(req.headers)
        console.log(token)
        if (!token) {
            return res
                .status(403)
                .send('A token is required for authentication')
        }
        try {
            jwt.verify(token, PUBLIC_KEY, { algorithms: ['RS256'] })
        } catch (err) {
            return res.status(401).send('Invalid Token')
        }
        return next()
    }
}
