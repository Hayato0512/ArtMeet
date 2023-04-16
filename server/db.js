const mysql = require("mysql");
// const connection = require("../app/connection");

//MySQL Connection Detail
const connection = mysql.createConnection({
  host: "us-cdbr-east-06.cleardb.net",
  user: "b463dda7a021ae",
  password: "af90497c",
  database: "heroku_85a07a97c5525a4",
});

module.exports = connection;
