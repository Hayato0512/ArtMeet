const router = require("express").Router();
const connection = require("../db");
const jsonParser = require("../app");
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
  connection.query("DELETE FROM post LIMIT 1", (error) => {
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

router.get("/readuserbyemail/:email", async (req, res) => {
  console.log("read users byemail query called");
  console.log(`req.body.email is ${req.params.email}`);
  connection.query(
    `SELECT * FROM user WHERE email = '${req.params.email}'`,
    (error, res2) => {
      if (error) throw error;
      else {
        console.log(res2);
        res.send(res2);
      }
    }
  );
});
router.get("/readuserbyid/:id", async (req, res) => {
  console.log("read users byid query called");
  connection.query(
    `SELECT * FROM user WHERE id = ${req.params.id}`,
    (error, res2) => {
      if (error) throw error;
      else {
        console.log(res2);
        res.send(res2);
      }
    }
  );
});

router.put("/update", async (req, res) => {
  console.log("update query called");
  console.log(`the passed req.body is ${req.body.id}`);
  connection.query(
    `UPDATE user SET name = 'Takuya1', email='takuya1@gmail.com' WHERE id = 104`,
    (error) => {
      if (error) throw error;
      else {
        res.send("successful update");
      }
    }
  );
});

router.get("/readpostsbyid/:id", async (req, res) => {
  console.log(`hey the parameter is ${req.params.id}`);
  connection.query(
    `SELECT * FROM post WHERE artistid = ${req.params.id}`,
    (error, res2) => {
      try {
        if (error) throw error;
        else {
          res.send(res2);
        }
      } catch (error) {
        console.log(error);
      }
    }
  );
});

router.post("/follows/:userid/:useridtofollow", async (req, res) => {
  console.log(`follows called`);
  connection.query(
    `INSERT INTO follows (userId, followeduserid) VALUES ('${req.params.userid}','${req.params.useridtofollow}')`,
    (error, res2) => {
      try {
        if (error) throw error;
        else {
          res.send(res2);
        }
      } catch (error) {
        console.log(error);
      }
    }
  );
});
router.get("/readfollowings/:userid", async (req, res) => {
  console.log(`followings called`);
  connection.query(
    `SELECT followeduserid FROM follows WHERE userId = ${req.params.userid}`,
    (error, res2) => {
      try {
        if (error) throw error;
        else {
          res.send(res2);
        }
      } catch (error) {
        console.log(error);
      }
    }
  );
});
// console.log(res);
// connection.query("DELETE FROM user LIMIT 1", (error) => {
//   if (error) throw error;
//   else {
//     res.send("hey");
//   }
// });
// });
// router.get("/a", async (req, res) => {
//   console.log(`hey, this `);
// });
module.exports = router;
