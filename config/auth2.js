const mysql = require("mysql");
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs')

const db = mysql.createConnection({
    host: "127.0.0.1",
    user: "root",
    password: "root",
    database: "recipediadb"
})

exports.register = (req, res) => {
  console.log(req.body);

  // const name = req.body.regEmail;
  // const password = req.body.regPass
  // const confirmPassword = req.body.regConfirmPass
  // const firstName = req.body.regFirstName;
  // const lastName = req.body.regLastName;

  const {
    regEmail,
    regPass,
    regConfirmPass,
    regFirstName,
    regLastName,
  } = req.body;

  db.query('SELECT email FROM users WHERE email = ?', [regEmail], async (error, results) => {
      if(error) {
        console.log(error);
      }

      if(results.length > 0) {
          return res.render('login', {
              message: 'This email is already in use'
          }),
          console.log("email in use");
      }else if(regPass !== regConfirmPass) {
        return res.render('login', {
            message: 'Passwords do not match'
        }),
        console.log("Passwords do not match");
      }

      let hashedPassword = await bcrypt.hash(regPass, 8);
      console.log(hashedPassword);

      db.query('INSERT INTO users SET ?', {email: regEmail, password: hashedPassword}, (error, result) =>{
        if(error) {
            throw error;
        } else {
            console.log("result: " + result)
        }
      })
  });
};

