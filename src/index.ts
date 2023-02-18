import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import cors from 'cors';
import ErpRouter from "./routes/erpRoutes";
import CrmRouter from "./routes/crmRoutes";
import swaggerDocument from "../docs/swagger";
import swaggerUi from "swagger-ui-express"

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument))
app.use('/erp', ErpRouter);
app.use('/crm', CrmRouter);

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}/`);
});

module.exports = app;
