const express = require("express")
const app = express()

app.get('/', async (req, res) => {
    try {
        const tweets = await Tweet.find().exec()
        res.json(tweets)
    } catch (err) {
        res.status(500).json({ error: err })
    }
})

module.exports = app