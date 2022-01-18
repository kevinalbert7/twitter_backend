const express = require("express")
const multer = require("multer")
const moment = require("moment")

const { verifyUser } = require("../middlewares/auth")
const User = require('../models/User')

const app = express()
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

// app.post('/:id', upload.single('profilePicture'), (req, res) => {
//     console.log(req.file)
//     const { 
//         path,
//         destination,
//         originalname
//      } = req.file

//     const date = moment().format('DD-MM-YYYY-hh-mm-ss')
//     console.log(date)
//     const fileName = `${date}-${originalname}`
//     console.log(fileName)
//     fs.renameSync(path, `${destination}/${originalname}`)
// })

//---Route qui modifie le profil d'un utilisateur

app.put('/followers', verifyUser, 
    async (req, res) => {
        console.log("je sui dans add follower")
        console.log("req user ", req.user)
    // try {
    //     // on récupère l'utilisateur connecté
    //     // on ajoute au tableau follower de l'utilisateur, l'id du follower
    //     // on sauvegarde le model de l'utilisateur
    //     req.user.followers.push(req.body.follower_id)
    //     const userUpdated = await req.user.save()
        
    //     res.json(userUpdated)
    // } catch (err) {
    //     console.log(err);
    //     res.status(500).json({ error: err })
    // }
})

module.exports = app

//   userFollow.followers.push()