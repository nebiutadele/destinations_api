const db = require("./db")
const cors = require("cors")
// Import an instance of express function
const express = require("express")



// Make port equal to enviroment or 3000
const PORT = process.env.PORT || 3000;

//Set up instance of a server
const app = express()

app.use(cors())

// Make the server listen to the port
app.listen(PORT, () => {
    console.log(`Server listening on PORT: ${PORT}`)
})

//Create a response for when server is called
app.get("/", (req, res) => {
    res.send(db)
})