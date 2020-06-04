const mysql = require("mysql");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const db = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "root",
  database: "recipediadb",
});

// exports.login = async (req, res) => {
//     try {
//         const {userEmail, userPass} = req.body;

//         if(!email || !password){
//         console.log('No username or password');
//         return
//     }

// db.query('SELECT * FROM users WHERE email = ?', [userEmail], async (error, results) => {
//     console.log(results);
//     if(!results || !(await bcrypt.compare(userPass, results[0].password))) {
//         console.log('Email or password is incorrect');
//        return
//     } else {
//         const id = results[0].id;

//         const token = jwt.sign({id: id }, process.env.JWT_SECRET, {
//             expiresIn: process.env.JWT_EXPIRES_IN
//         });

//         console.log("token is: " + token);

//         const cookieOptions = {
//             expires: new Date(
//                 Date.now() + process.env.JWT_COOKIE_EXPIRES * 24 * 60 * 60 * 1000
//             ),
//             httpOnly: true
//         }

//         res.cookie('jwt', token, cookieOptions);
//         res.status(200).redirect("/");
//     }
// })

//     } catch (error) {
//         res.redirect("/login");
//         console.log(error);
//     }
//}

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
          { name: regFirstName, email: regEmail, password: hashedPassword },
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
