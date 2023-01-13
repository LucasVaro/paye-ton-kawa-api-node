'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
const express_1 = require('express')
class IndexRouter {
    constructor() {
        this.router = (0, express_1.Router)()
        this.router.get('/', this.index)
    }
    index(req, res) {
        res.send('Hello World!')
    }
}
const indexRouter = new IndexRouter().router
exports.default = indexRouter
