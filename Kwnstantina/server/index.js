const express = require('express');
const bodyParser = require('body-parser');
var connection  = require('express-myconnection'); 
var mysql = require('mysql');
const cors = require('cors');
var open = require('open');

const axios = require('axios');
const { response } = require('express');
const app = express(); 


let port = process.env.PORT;

app.use(cors())
app.use(bodyParser.urlencoded({extended:true}))
//app.use(express.urlencoded({ extended: false }));
app.use(express.json());


if(port == null || port == "") {
 port = 5000;
}


app.use(bodyParser.json());
// Login info for our database.
var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "6944",
    database: "web",
    port: "3306"
});


// Insert to database

   /* const sqlInsert = "INSERT INTO user (username,email,password,location_x,location_y) VALUES ('mariadb','www.mariadb@gmail.com','bestsqlever1@3','45','34');"
    connection.query(sqlInsert,(err,result) =>{
        console.log("One row inserted!");}
    )
    */
// Connect to database.
connection.connect(function(err) {
  // If there's something wrong throw an error message.  
  if (err) {
      throw err;
  }
  // Else if we connect.
  else {
      console.log("Connected!");
  }
});

    let values =[];

    app.get("/", (req, res) => {
      res.send("hello")
    });

    app.post("/api/insert", (req,res) =>{
        
        // text input from frontend -- signUpForm -- 
        const newUsername = req.body.newUsername
        const newEmail = req.body.newEmail
        const newPassword = req.body.newPassword
        res.send("newUsername")
        // check if a user has already been signed up with this email

        var select = "SELECT email FROM user where email = ?";
        var insertNewUser = "INSERT INTO user(username,email,password) VALUES (?,?,?)";
        var regex = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/;

        connection.query(select,[newEmail],function(err,result) 
        {
            // if the email doesnt exist
            if (result.length == 0) {
                console.log("no user signed up with this email yet")
                // check password 
                if(newPassword.match(regex))
                {
                // sign up new user by inserting him in database
                connection.query(insertNewUser,[newUsername,newEmail,newPassword],(err,result) =>{

                    console.log("new user is signed up")
                    
        
                });
                 }
                 else 
                 {
        
                    console.log("password must: be more than eight characters, contain at least one capital letter, a numbers and one symbol(eg #$*&@) ")
                
                    
                 }
                }
                

            else 
            console.log("email is already in use!");
        })
 
    });


    


app.listen(port, function() {
 console.log("Server started successfully on port:", port );
});