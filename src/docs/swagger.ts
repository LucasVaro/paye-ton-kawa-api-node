const swaggerAutogen = require("swagger-autogen")
const doc = {
    info: {
        version: '1.0.0',
        title: 'Paye Ton Kawa',
        description: 'Node API Documentation',
    },
    host: 'localhost:3000',
    basePath: '/api-docs',
    schemes: [],
    consumes: [],
    produces: [],
    tags: [],
    securityDefinitions: {},
    definitions: {},
    components: {}
};

const outputFile = './docs-output.json';
const endpointsFiles = ['../index.ts'];

swaggerAutogen(outputFile, endpointsFiles, doc);