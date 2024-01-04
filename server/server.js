'use strict';

// load package
const express = require('express');
const app = express();

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

const cors = require('cors');
app.use(cors());

//packages for sending email
const nodemailer = require("nodemailer");

const PORT = 8080;
const HOST = '0.0.0.0';


// Helper
const panic = (err) => console.error(err)

//Database setup
const mysql = require('mysql');
const util = require("util"); 


//Database setup
//const mysql = require('mysql');
//const util = require("util"); 

//TODO WILL USE THIS FOR THE BLOG PAGE
// Connect to database
//const connection = mysql.createConnection({
//    host: "0.0.0.0",
//    user: "root",
//    password: "admin"
//});
//connection.connect((err) => {
//    if (err) {
//        console.log("Error Connecting")
//        throw err;
//    }
//    console.log('Connected to MySQL Server!');
//});


//this is for sending email from the homepage
//uses Notification.Nikhbakht@gmail.com
function sendEmail(subject_email, text_name, text_phone, text_message){
    return new Promise((resolve,reject) => {
        var transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: 'notifications.nikhbakht@gmail.com',
                pass: 'mlbx fpge fjuo cdpz',
            }
        });
        //actually sending the email
        const mail_configs = {
            from:'notifications.nikhbakht@gmail.com',
            to: 'codennik95@gmail.com',
            subject: `Email by ${subject_email}`,
            text: `Sent by ${text_name}\n
             Phone Number: ${text_phone}\n
             Email: ${subject_email}\n
             ${text_message}`
        }
        console.log(`email ${subject_email}`)
        transporter.sendMail(mail_configs, function(error,info){
            if(error){
                console.log(error)
                return reject({message: "An error occured."})
            }
            return resolve({message: "Email sent."})
        })
    });
}

//app get function that uses the send email function to send emails
app.post('/email', (req,res) => {
    let recipient = req.body.recipient;
    let phoneNo = req.body.phoneNo;
    let email = req.body.email;
    let message = req.body.message;
    sendEmail(email,recipient,phoneNo,message)
    .then(response => res.send(response.message))
    .catch(error => res.status(500).send(error.message))
});


app.use('/', express.static('pages'));


app.listen(PORT, HOST, () => {
    console.log(`Express web server started: http://0.0.0.0:${PORT}`);
 });

console.log('up and running');

