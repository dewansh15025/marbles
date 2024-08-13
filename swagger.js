// const swaggerJSDoc = require("swagger-jsdoc");

// const swaggerDefinition = {
// openapi: "3.0.0",
// info: {
// title: "My API",
// version: "1.0.0",
// description: "My API Description",
// },
// };

// const options = {
// swaggerDefinition,
// apis: ["./routes/*.js"], // Path to the API routes in your Node.js application
// };

// const swaggerSpec = swaggerJSDoc(options);
// module.exports = swaggerSpec;


const swaggerJSDoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Simple Note Application',
      version: '1.0.0',
      description: 'API documentation for Simple Note Application',
    },
  },
  
  apis: ['./router/*.js','./models/*.js'], // Path to the API routes
};
const swaggerSpec = swaggerJSDoc(options);
module.exports = swaggerSpec;