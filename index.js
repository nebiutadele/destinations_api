const db = require("./db")
// Import an instance of express function
const express = require("express")

const PORT = process.env.PORT || 3000;

//Set up instance of a server
const app = express()

app.listen(PORT, () => {
    console.log(`Server listening on PORT: ${PORT}`)
})

//Create a response for when server is called
app.get("/", (req, res) => {
    res.send(db)
})