"use strict"
require("dotenv").config()

const express = require("express")
const cookies = require("cookies")
const bodyParser = require("body-parser")
const app = express()
const Port = 80

const srvif = require("./srvif")
const srvws = require("./srvws");


app.use(express.static((__dirname+'\\res')))
app.set('views', __dirname+'\\views')
app.set('view engine','ejs')
app.engine('ejs', require('ejs').__express)
app.use(bodyParser.urlencoded({
    extended: true
}))
app.use(bodyParser.json())

app.use(cookies.express("a","b","c"))


app.use("/if", srvif);




app.get("/", (req, res) => {
    if(res.cookies.get("token")) {
        res.render("home")
    } else {
        res.redirect("/login")
    }
})

// Only for testing...
app.get("/home", (req, res) => {
    res.render("home")
})

app.get("/login", (req, res) => {
    res.render("login")
})

app.get("/register", (req, res) => {
    res.render("register")
})

app.get("/help", (req, res) => {
    res.render("help")
})

app.get("/inmeeting", (req, res) => {
    res.render("inmeeting")
})

app.get("/support", (req, res) => {
    res.render("support")
})

app.get("/moreinfo", (req, res) => {
    res.render("More_info")
})

app.get("/settings", (req, res) => {
    res.render("settings")
})

app.get("/contact", (req, res) => {
    res.render("contact")
})

app.get("*", (req, res) => {
    res.status(404)
    res.render("notfound")
})


app.listen(Port, () => {
    console.log('Server listening on port ' + Port)
})