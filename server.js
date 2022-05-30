const express = require("express")
const dotenv = require("dotenv")
const { default: mongoose } = require("mongoose")
const { header } = require("express/lib/request")
const app = express() 

const PORT = process.env.PORT || 2222
app.use(express.json())


app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`)
})

app.get("/home", (req, res) => {
    res.render("<h1>Welcome to the page</h1> <script>console.log('hello world')</script>")
})
