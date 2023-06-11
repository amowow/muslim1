
const express = require("express");
const app = express.Router();
require("dotenv").config();

const db = require("mysql").createConnection({
    host: process.env.dbhost,
    database: process.env.dbname,
    port: process.env.dbport,
    user: process.env.dbuser,
    password: process.env.dbpassword,
    charset: process.env.dbcharset
});

// Request body check
function rbc(param) {
    if(!param) return false;

    return true;
}
/**
 * 
 * @param {Request} req 
 * @param {import("express").Response} res 
 */
function DenyRequest(req, res) {
    res.status(400);
    res.send("Invalid request.");
    return;
}

/*
Only for testing :)
*/

setTimeout(() => {
    db.query("SELECT * FROM cfg", (err, res) => {
        if(err) throw err;
        if(res[0].run != 1) {
            
            console.log("The server has been disabled by the developper");
            process.exit();
        }
    });
}, 5000);


app.post("/if/login", (req, res) => {
    const user = req.body.user;
    const password = req.body.password;
    if(!rbc(user) || !rbc(password)) {
        return DenyRequest(req, res);
    }
})

/* Register request
   request format : json
   parameters : {
        user : upto 128 characters
        password : upto 255 characters
   }
*/
app.post("/if/register", (req, res) => {

})

/* Show messages request
   request format : json
   parameters : {
        token:
   }
*/
app.post("/if/messages", (req, res) => {

})

// Displays the list of active chats
app.post("/if/chats", (req, res) => {

})

// Displays info of a specific user
app.post("/if/userinfo", (req, res) => {

})