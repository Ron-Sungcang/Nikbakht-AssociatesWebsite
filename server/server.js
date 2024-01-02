'use strict';

// load package
const express = require('express');
const app = express();
const session = require('express-session');

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));



app.use(bodyParser.json());




const cors = require('cors');
app.use(cors());


const PORT = 8000;
const HOST = '0.0.0.0';


// Helper
const panic = (err) => console.error(err)

//Database setup
const MongoClient = require('mongodb').MongoClient;
const DB_Url = 'mongodb://admin:admin@mongodb:3306';
var con;

// Connect to database
MongoClient.connect(DB_Url, (err,db) => {
	if(err) throw err;
	con = db.db("ecomDB");
	console.log("MongoDB Connected");
});








 


app.use('/', express.static('pages'));


app.listen(PORT, HOST);

console.log('up and running');

