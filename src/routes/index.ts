import { Router, Request, Response } from 'express'

class IndexRouter {
    public readonly router: Router
    constructor() {
        this.router = Router()
        this.router.get('/', this.index)
    }

    index(req: Request, res: Response) {
        res.send('Hello World!')
    }
}

const indexRouter = new IndexRouter().router
export default indexRouter
