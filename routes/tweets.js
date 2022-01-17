const express = require("express")
const { body, validationResult } = require("express-validator")
const app = express()

const Tweet = require("../models/Tweet")
const User = require("../models/User")

//---Route qui récupère les tweets---

app.get('/', async (req, res) => {
    try {
        const tweets = await Tweet.find().exec()
        res.json(tweets)
    } catch (err) {
        res.status(500).json({ error: err })
    }
})

//---Nouveau tweet lié à un utilisateur---

app.post('/',
    body('content')
        .isLength({ max:280 }).withMessage("Tweet is too long"),

    async (req, res) => {
    console.log(req.body)

        const { errors } = validationResult(req)
        const { user_id } = req.body
        
        if (errors.length > 0) {
            res.status(400).json({ errors })
            return
        }

        try {
            const tweet = new Tweet({ ...req.body})

            const tweetInsered = await tweet.save()
            const getUser = await User.findById(user_id)
            if (getUser) {
                getUser.tweets.push(tweetInsered._id)
                await getUser.save()
            }

            res.json(tweetInsered)

        } catch (err) {
            console.log(err)
            res.status(500).json({ error: err })
        }
             
    }
)
        
        // user.save(async  (err, user) => {
        //     if (tweet) {
        //         const getUser = await User.findByID(user)
        //         getUser.tweets.push(tweet_id)
        //         getUser.save()

        //         res.json(tweet)
        //         return
        //     }

        //     console.log(err)
        //     res.status(500).json({ error:err })
        // })
module.exports = app