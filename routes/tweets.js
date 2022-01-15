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

//---Nouveau tweet lié à un utilisateur---

app.post('/', async (req, res) => {
    console.log(req.body)

    const { user } = req.body

    try {
        const tweet = await new Tweet({ ...req.body})
        
        user.save(async  (err, user) => {
            if (tweet) {
                const getUser = await User.findByID(user)
                getUser.tweets.push(tweet_id)
                getUser.save()

                res.json(tweet)
                return
            }

            console.log(err)
            res.status(500).json({ error:err })
        })
    } catch (err) {
        console.log(err)
        res.status(500).json({ error: err })
    }
})

module.exports = app