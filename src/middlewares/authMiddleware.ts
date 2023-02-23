import jwt from 'jsonwebtoken'
import { Request, Response, NextFunction } from 'express'

export default class authMiddleware {
    static verifyToken(req: Request, res: Response, next: NextFunction) {
        const token =
            req.body.token || req.query.token || req.headers['x-access-token']
        if (!token) {
            return res
                .status(403)
                .send('A token is required for authentication')
        }
        try {
            const publicKeyJSON = process.env.PUBLIC_KEY ?? '';
            if (publicKeyJSON === '') {
                const err = new Error('No public key')
                console.error(err)
                throw err
            }
            const {publicKey} = JSON.parse(publicKeyJSON);
            jwt.verify(token, publicKey, { algorithms: ['RS256'] })
        } catch (err) {
            return res.status(401).send('Invalid Token')
        }
        return next()
    }
}
