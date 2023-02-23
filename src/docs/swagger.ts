const swaggerAutogen = require("swagger-autogen")

const doc = {
    info: {
        version: '1.0.0',
        title: 'Paye Ton Kawa - Webshop API',
        description: 'Node API Documentation',
    },
    host: 'localhost:3000',
    basePath: '/',
    schemes: [],
    consumes: ['application/json'],
    produces: ['application/json'],
    tags: [
        {
            "name": "ERP",
            "description": "Endpoints"
        },
        {
            "name": "CRM",
            "description": "Endpoints"
        }
    ],
    securityDefinitions: {
        apiKeyAuth: {
            type: "apiKey",
            in: "header",
            name: "Authorization",
            description: "Access JWT"
        }
    },
    definitions: {
        Customers: {
            id: 1,
            name: 'Jean Michel',
            firstName: 'Jean',
            lastName: 'Michel',
            username: 'jeanmich34',
            address: ['Address'],
            profile: ['male', '34 years old'],
            company: 'company name',
            email: 'jeanmich34@gmail.com',
            createdAt: Date.now(),
        },
        Order: {
            id: 1,
            createdAt: Date.now(),
            customerId: 1
        },
        Product: {
            id: 1,
            name: 'Mon beau produit',
            createdAt: Date.now,
            details: {
                price: 50,
                description: 'Produit qualitativement qualitatif',
                color: 'Rose'
            },
            stock: 27
        }
    },
    components: {}
};

const outputFile = 'src/docs/docs-output.json';
const endpointsFiles = ['src/index.ts'];

swaggerAutogen(outputFile, endpointsFiles, doc);
