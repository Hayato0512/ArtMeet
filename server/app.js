const express = require("express");
const app = express();

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
