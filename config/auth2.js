const mysql = require("mysql");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const db = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "root",
  database: "recipediadb",
});

//store user registration information to users table
exports.register = (req, res) => {
  console.log(req.body);

  const {
    regEmail,
    regPass,
    regConfirmPass,
    regFirstName,
    regLastName,
  } = req.body;

  db.query(
    "SELECT email FROM users WHERE email = ?",
    [regEmail],
    async (error, results) => {
      try {
        if (results.length > 0) {
          console.log("email in use");
          return;
        } else if (regPass !== regConfirmPass) {
          console.log("Passwords do not match");
          return;
        }

        let hashedPassword = await bcrypt.hash(regPass, 8);
        console.log(hashedPassword);

        db.query(
          "INSERT INTO users SET ?",
          { user_name: regFirstName, email: regEmail, password: hashedPassword },
          (error, result) => {
            if (error) {
              throw error;
            } else {
              console.log(result);
              res.redirect("/login");
            }
          }
        );
      } catch (error) {
        console.log("(line 93) tryCatch error: " + error);
        console.log(results);
      }
    }
  );
};
