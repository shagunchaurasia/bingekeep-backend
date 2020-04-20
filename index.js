const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 5000;
const config = require("./src/config/config");
const dialogFlowRoutes = require("./src/routes/dialogFlow");
const tmdbRoutes = require("./src/routes/tmdbRoutes");

//Swagger documentation requirements
const swaggerUI = require("swagger-ui-express");
const yaml = require("yamljs");
const swaggerDoc = yaml.load("./swagger/swagger.yaml");

app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerDoc));

app.use(bodyParser.json({ extended: true }));

app.use("/api/df/", dialogFlowRoutes);

app.use("/api/tmdb/", tmdbRoutes);

app.get("/", (request, response, next) => {
  response.send({ Hello: "there" });
});

app.listen(PORT);
