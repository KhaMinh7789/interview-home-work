const express = require("express");
const bodyParser = require("body-parser");
const jsonServer = require("json-server");
const app = express();
const PORT = 5000;

app.use(bodyParser.json());

// Use json-server to create a REST API
app.use("/api", jsonServer.router("db.json"));

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
