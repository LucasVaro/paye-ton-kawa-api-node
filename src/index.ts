import express from 'express'
import path from 'path'
import cookieParser from 'cookie-parser'
import logger from 'morgan'
import cors from 'cors'
import ErpRouter from './routes/erpRoutes'
import CrmRouter from './routes/crmRoutes'
import Documentation from './docs/docs-output.json'
import swaggerUi from 'swagger-ui-express'
import errorMiddleware from './middlewares/errorMiddleware'
import authMiddleware from './middlewares/authMiddleware'

const app = express()

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(cors())
app.use(express.static(path.join(__dirname, 'public')))

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(Documentation))
app.use(authMiddleware.verifyToken)
app.use('/erp', ErpRouter)
app.use('/crm', CrmRouter)
app.use(errorMiddleware.handleError)

// Start the server
const port = process.env.PORT || 3000
app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}/`)
})

module.exports = app
