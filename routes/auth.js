const express = require("express")
const app = express()
const passport = require("../config/passport")

const users = require("../users.json")
const User = require("../models/User")

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

// app.post('/login', passport.authenticate("local"),
//     async (req, res) => {
//         if (req.user) {
//             req.logIn(req.user, err => {
//                 if (err) {
//                     console.log(err)
//                 } else {
//                     res.json(req.user)
//                 }
//             })
//         }   
//     }
// )

//---Route du logout---

app.delete('/logout', (req, res) => {
    req.logout()
    res.status(200).send("ok")
})

// ----Création d'un nouvel utilisateur---

app.post('/signup', 
    
    async (req, res) => {
    // const { username, email } = req.body

    try {
        const user = new User({ ...req.body})
        const userInsered = await user.save()

        res.json(userInsered)
    
    } catch (err) {
        res.status(500).json({ error: err })
    }

})

module.exports = app

// try {
//     const comment = new Comment({ ...req.body})
    
//     const commentInsered = await comment.save()
//     const getUser = await User.findById(user_id)
//     if (getUser) {
//         getUser.comments.push(commentInsered._id)
//         await getUser.save()
//     }

//     res.json(commentInsered)

// } catch (err) {
//     console.log(err)
//     res.status(500).json({ error: err })
// }