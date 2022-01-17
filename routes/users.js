const express = require("express")
const app = express()
const User = require('../models/User')

//---Route qui récupère tous les utilisateurs---

app.get('/', async (req, res) => {
    try {
        const users = await User.find().exec()
        res.json(users)
    } catch (err) {
        res.status(500).json({ error: err })
    }
})

// ----Création d'un nouvel utilisateur---

app.post('/', async (req,res) => {
    const user = new User({ ...req.body })

    user.save((err, user) => {
        if (err) {
            res.status(500).json({ error: err })
            return
        }

        res.json(user)
    })
})



//----Route qui renvoir un utilisateur grâce à son id---

app.get('/:id', async (req, res) => {
    const { id } = req.params

    try {
        const user = await User.findById({ _id: id }).exec()
        res.json(user)
    } catch (err) {
        res.status(500).json({ error: err })
    }
})


module.exports = app