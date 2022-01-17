const express = require("express")
const app = express()
const passport = require("../config/passport")

//---Route du login---

app.post('/login', passport.authenticate("local"), (req, res) => {
    console.log(req.user)
    if (req.user) {
        req.logIn(req.user, err => {
            if (err) {
                console.log(err)
            } else {
                res.json(req.user)
            }
        })
    }
})

//---Route du logout---

app.delete('/logout', (req, res) => {
    req.logout()
    res.status(200).send("ok")
})

//---Route du signup---

app.post('/signup', (req, res) => {
    const { username, email } = req.body

    let user = users.find(user => (
        user.username === username && user.email === email
    ))
    
    if (user) {
        res.status(409).json({ error: 'User already exists' })
    } else {
        user = {
            ...req.body,
            id: users.length + 1
        }
    }
})

module.exports = app