const router = require("express").Router();
const mysql = require("mysql");
// const connection = require("../app/connection");

//MySQL Connection Detail
const connection = mysql.createConnection({
  host: "us-cdbr-east-06.cleardb.net",
  user: "b463dda7a021ae",
  password: "af90497c",
  database: "heroku_85a07a97c5525a4",
});

router.get("/post", (req, res) => {
  console.log("hey what up???");
  connection.query(
    "INSERT INTO post (artistId, title,price,setsumei,desc2) VALUES (2, 'testClass2',50,'this is setsumei','desc2')",
    (error, res2) => {
      if (error) throw error;

      if (!error) {
        console.log("succeed");
        res.send("succeed");
      }
    }
  );
});

router.delete("/deletefirst", async (req, res) => {
  console.log("delete query called");
  connection.query("DELETE FROM user LIMIT 1", (error) => {
    if (error) throw error;
    else {
      res.send("hey");
    }
  });
});
router.delete("/deletebyid/:id", async (req, res) => {
  console.log("delete query called");
  const result = req.params.id;
  console.log(`req is like this ${result}`);
  connection.query(`DELETE FROM user WHERE id = ${result}`, (error) => {
    if (error) throw error;
    else {
      res.send("hey");
    }
  });
});

router.get("/readusers/", async (req, res) => {
  console.log("read users query called");
  connection.query(`SELECT * FROM user`, (error, res2) => {
    if (error) throw error;
    else {
      console.log(res2);
      res.send(res2);
    }
  });
});
module.exports = router;
