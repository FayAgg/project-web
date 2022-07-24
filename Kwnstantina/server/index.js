const express = require('express');
const bodyParser = require('body-parser');
var connection  = require('express-myconnection'); 
var mysql = require('mysql');

const app = express(); 
app.use(bodyParser.json());
// Login info for our database.
var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "6944",
    database: "web",
    port: "3306"
});

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

