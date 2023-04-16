const express = require("express");
const app = express();

const port = process.env.PORT || 8000;

const cors = require("cors");

//View Engine
app.set("view engine", "ejs");

app.use(
  cors({
    origin: "*",
  })
);
//Render Home Page and
app.get("/", (req, res) => {
  res.render("pages/index");
});

// Insert a user into the user table in the mySQL.
// app.get("/add", (req, res) => {
//   connection.query(
//     "INSERT INTO user (name, email, password, isArtist) VALUES ('Takuya9', 'takuya@gmail.com', 'hayato', 'true' )",
//     (error, resFromInsert) => {
//       if (error) throw error;

//       if (!error) {
//         console.log(res);
//       }
//     }
//   );
// });

//The desc is a MySQL reserved word, therefore you cannot use it.
// app.get("/post", (req, res) => {
//   console.log("hey what up???");
//   connection.query(
//     "INSERT INTO post (artistId, title,price,setsumei,desc2) VALUES (2, 'testClass2',50,'this is setsumei','desc2')",
//     (error, res2) => {
//       if (error) throw error;

//       if (!error) {
//         console.log("succeed");
//         res.send("succeed");
//       }
//     }
//   );
// });
const queryRoute = require("./routes/queries");
app.use("/api/query", queryRoute);

app.listen(port);
console.log(`Server is listening on port ${port}`);
// module.connection = connection;

/**
 * below is an example of Select query.
 */
// connection.query("SELECT *  FROM user ", (err, rows) => {
//   if (err) throw err;

//   if (!err) {
//     console.log(rows);
//     res.render("pages/index", { rows });
//   }
// });
