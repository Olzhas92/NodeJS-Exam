const express = require("express");
const fs = require("fs");
const app = express();
const files = require("./files");

const cors = require("cors");
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

app.get("/", (request, response) => {
  response.send([{ id: 1, name: "hello" }]);
});

app.post("/", (request, response) => {
  const data = JSON.stringify(request.body);
  console.log(data);
  // fs.appendFile("users.json", "utf8", data, (error) => {
  //   if (error) {
  //     throw error;
  //   }
  // });
});

app.get("/files", (request, response) => {
  response.send(files);
});

app.use((request, response) => {
  response.status(404).send("<h2>Page Not Found</h2>");
});

app.listen(7001, () => {
  console.log("server has been launched...");
});
