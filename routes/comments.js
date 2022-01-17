const express = require("express")
const { body, validationResult } = require("express-validator")
const app = express()

const Comment = require("../models/Comment")
const User = require("../models/User")

app.get('/', async (req, res) => {
    try {
        const comments = await Comment.find().exec()
        res.json(comments)
    } catch (err) {
        res.status(500).json({ error: err })
    }
})

//---Nouveau commentaire lié à un utilisateur---

app.post('/', 
    body('content')
        .isLength({ max:280 }).withMessage("Comment is too long"),
        
    async (req, res) => {
    console.log(req.body)

        const { errors } = validationResult(req)
        const { user_id } = req.body

        if (errors.length > 0) {
            res.status(400).json({ errors })
            return
        }

        try {
            const comment = new Comment({ ...req.body})
            
            const commentInsered = await comment.save()
                console.log(user_id)
            const getUser = await User.findById(user_id)
            if (getUser) {
                getUser.comments.push(commentInsered._id)
                await getUser.save()
            }

            res.json(commentInsered)

        } catch (err) {
            console.log(err)
            res.status(500).json({ error: err })
        }
    }
)

module.exports = app