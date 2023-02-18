const swaggerDocument = {
    openapi: "3.0.3",
    info: {
        title: "Paye ton kawa API",
        description: "Paye ton kawa API",
        version: "1.0.0"
    },
    host: "localhost:8000",
    basePath: "/",
    schemes: [
        "http"
    ],
    consumes: [
        "application/json"
    ],
    produces: [
        "application/json"
    ]
}

export default swaggerDocument;
