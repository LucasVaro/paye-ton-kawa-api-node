import request from 'supertest'
import express from 'express'
import index from '../routes/index'

const app = express()
app.use('/', index)

describe('Good Home Routes', function () {
    test('responds to /', async () => {
        const res = await request(app).get('/')
        expect(res.statusCode).toBe(200)
        expect(res.text).toEqual('Hello World!')
    })

    it('not responds to /about', async () => {
        const res = await request(app).get('/about')
        expect(res.statusCode).not.toBe(200)
        expect(res.text).not.toEqual('About Page')
    })

    it('responds to /', async () => {
        const res = await request(app).get('/')
        expect(res.statusCode).toBe(200)
        expect(res.text).toEqual('Hello World!')
    })

    it('not responds to /about', async () => {
        const res = await request(app).get('/about')
        expect(res.statusCode).not.toBe(200)
        expect(res.text).not.toEqual('About Page')
    })
})
