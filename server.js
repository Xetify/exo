const express = require("express")
const dotenv = require("dotenv")
const { default: mongoose } = require("mongoose")
const { header } = require("express/lib/request")
const app = express() 

const PORT = process.env.PORT || 2222
app.use(express.json())

app.get("/", (req, res) => {
    res.send("Hello World")
})

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`)
})
