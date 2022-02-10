const db = require("./db")
// Import an instance of express function
const express = require("express")
//Set up instance of a server
const app = express()
//Set local port
app.listen(3000)
//Create a response for when server is called
app.get("/", (req, res) => {
    res.send(db)
})