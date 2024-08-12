const express = require('express');
const bodyParser = require('body-parser');
const cors = require("cors");
require('dotenv').config()
const db = require('./database');
const swaggerUI = require("swagger-ui-express");
const swaggerSpec = require("./swagger");

const  sequelize = db.sequelize;

const app = express();
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerSpec));

// Start the server
app.use(express.json()); // JSON Parser
app.use(express.urlencoded({ extended: true })); // URL Body Parser

// CORS
app.use(
  cors({
    origin: "*",
  })
);

// Routes
const routes = require("./router/routes");
app.use(routes);
const PORT= process.env.APP_PORT;

sequelize.authenticate()
.then(() => {
  console.log('DB Connection has been established successfully.');
})
.catch(err => {
  console.error('Unable to connect to the database:', err);
}).then(()=>{
    
})

app.listen(PORT||3000, () => console.log('Server started on port ',PORT));

