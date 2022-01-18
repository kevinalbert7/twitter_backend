const express = require("express")
const { body, validationResult } = require("express-validator")
const Comment = require("../models/Comment")
const User = require("../models/User")
const app = express()

//---Route qui récupère les commentaires---

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
        const { user_id } = req.body
    
        const { errors } = validationResult(req)

        if (errors.length > 0) {
            res.status(400).json({ errors })
            return
        }

        try {
            const comment = new Comment({ ...req.body})
            
            const commentInsered = await comment.save()

            const getUser = await User.findById(user_id)

            if (getUser) {
                getUser.comments.push(commentInsered._id)
                await getUser.save()
            }

            res.json(commentInsered)
        } catch (err) {
            res.status(500).json({ error: err })
        }
    }
)

//---Route qui récupère un commentaire par son id---

app.get('/:id', async (req, res) => {
    const { id } = req.params

    try {
        const comment = await Comment.findById(id).exec()

        res.json(comment)
    } catch (err) {
        res.status(500).json({ error: err })
    }
})

//---Route pour supprimer un tweet---

app.delete('/:id', async (req, res) => {
    const { id } = req.params
    
    try {
        const commentDeleted = await Comment.deleteOne({ _id: id }).exec()

        res.json(commentDeleted)
    } catch (err) {
        res.status(500).json({ error: err })
    }
})

module.exports = app