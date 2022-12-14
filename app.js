const express = require("express");
const fs = require("fs");
const app = express();

const cors = require("cors");
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

app.get("/", (request, response) => {
  response.send([{ id: 1, name: "hello" }]);
});

app.get("/files", (request, response) => {
  response.send([{ id: 1, name: "myfile" }]);
});

app.use((request, response) => {
  response.status(404).send("<h2>Page Not Found</h2>");
});

app.listen(7001, () => {
  console.log("server has been launched...");
});
