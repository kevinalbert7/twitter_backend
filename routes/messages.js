const express = require("express")
const app = express()

app.get('/', async (req, res) => {
    try {
        const comments = await Comment.find().exec()
        res.json(comments)
    } catch (err) {
        res.status(500).json({ error: err })
    }
})

module.exports = app