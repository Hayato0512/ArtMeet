const express = require("express");
const app = express();
var bodyParser = require("body-parser");
var jsonParser = bodyParser.json();
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

const port = process.env.PORT || 8000;

const cors = require("cors");

app.use(
  cors({
    origin: "*",
  })
);

const queryRoute = require("./routes/userQueries");
app.use("/api/query", queryRoute);

app.listen(port);
console.log(`Server is listening on port ${port}`);
// module.connection = connection;

module.exports = jsonParser;
