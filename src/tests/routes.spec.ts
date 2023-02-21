import request from 'supertest'
import express from 'express'
import ErpRouter from '../routes/erpRoutes'
import CrmRouter from '../routes/crmRoutes'
import indexRouter from '../routes'

const app = express()
app.use('/', indexRouter)
app.use('/erp', ErpRouter)
app.use('/crm', CrmRouter)

describe('Good Index Routes', function () {
    it('should return 200 Status', async function () {
        const res = await request(app).get('/erp')
        expect(res.status).toBe(200)
    })

    it('should return 200 Status', async () => {
        const res = await request(app).get('/erp')
        expect(res.status).toBe(200)
        expect(res.text).toEqual('ERP Controller')
    })

    it('should return 200 Status', async () => {
        const res = await request(app).get('/crm')
        expect(res.status).toBe(200)
        expect(res.text).toEqual('CRM Index')
    })

    it('should not return CRM Index', async () => {
        const res = await request(app).get('/erp')
        expect(res.status).toBe(200)
        expect(res.text).not.toEqual('CRM Index')
    })

    it('should not return 200 Status', async () => {
        const res = await request(app).get('/about')
        expect(res.status).not.toBe(200)
    })
})
