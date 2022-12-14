const express = require("express");
const fs = require("fs");
const app = express();

const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", (request, response) => {
  response.send("<h1>Hello World!</h1>");
});

app.get("/files", (request, response) => {
  response.send("<h2>My Files</h2>");
});

app.use((request, response) => {
  response.status(404).send("<h2>Page Not Found</h2>");
});

app.listen(7001, () => {
  console.log("server has been launched...");
});
