const express = require("express")
const app = express()

app.get('/', async (req, res) => {
    try {
        const users = await User.find().exec()
        res.json(users)
    } catch (err) {
        res.status(500).json({ error: err })
    }
})

module.exports = app