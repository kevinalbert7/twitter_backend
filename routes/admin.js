const express = require("express")
const app = express()

app.get('/', (req, res) => {
    console.log(req.user)
})

module.exports = app