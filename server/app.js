
const express = require("express");
const logger = require("morgan");
const bodyParser = require("body-parser");
const errorHandler = require("./middleware");


const app = express();

app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(errorHandler.logErrors);
app.use(errorHandler.errorHandler);
require("./routes")(app);

app.get("*", (req, res) => res.status(200).send({
    message: "Welcome to the beginning of nothingness."
}));

module.exports = app;
