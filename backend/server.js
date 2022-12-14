const express = require("express");
require("dotenv").config()

const app = express();

app.get("/", (req, res) => {
    console.log("Hello world");
})

const PORT = process.env.PORT || 8000
app.listen(PORT, (err) => {
    err ? console.log(`Something's wrong. It's ${error}`) :
    console.log(`Dat PORT ${PORT} be thicc af fam! 🔥`)
})