const express = require("express")
const app = express()
const multer = require("multer")
const moment = require("moment")

const User = require('../models/User')

const upload = multer({ dest: 'public' })

//---Route qui récupère tous les utilisateurs---

app.get('/', async (req, res) => {
    try {
        const users = await User.find().exec()
        res.json(users)
    } catch (err) {
        res.status(500).json({ error: err })
    }
})

//----Route qui renvoie un utilisateur grâce à son id---

app.get('/:id', async (req, res) => {
    const { id } = req.params

    try {
        const user = await User.findById(id).exec()
        res.json(user)
    } catch (err) {
        res.status(500).json({ error: err })
    }
})

//---Route d'upload profilePicture---

app.post('/:id', upload.single('profilePicture'), (req, res) => {
    const { id } = req.params
    console.log(req.file)
    const { 
        path,
        destination,
        originalname
     } = req.file

    const date = moment().format('DD-MM-YYYY-hh-mm-ss')
    console.log(date)
    const fileName = `${date}-${originalname}`
    console.log(fileName)
    fs.renameSync(path, `${destination}/${originalname}`)
})

module.exports = app