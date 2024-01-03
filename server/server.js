'use strict';

// load package
const express = require('express');
const app = express();

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

//const cors = require('cors');
//app.use(cors());

const PORT = 8080;
const HOST = '0.0.0.0';


// Helper
const panic = (err) => console.error(err)

//Database setup
const mysql = require('mysql');
const util = require("util"); 


// Connect to database
const connection = mysql.createConnection({
    host: "0.0.0.0",
    user: "root",
    password: "admin"
});

connection.connect((err) => {
    if (err) {
        console.log("Error Connecting")
        throw err;
    }
    console.log('Connected to MySQL Server!');
});


app.use('/', express.static('pages'));


app.listen(PORT, HOST);

console.log('up and running');

