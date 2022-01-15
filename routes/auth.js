const express = require("express")
const app = express()
const passport = require("../config/passport")


app.post('/login', passport.authenticate("local"), (req, res) => {
    console.log(req.user)
})

module.exports = app