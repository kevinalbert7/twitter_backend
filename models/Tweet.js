const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    content:	{
        type: String
    },
    user_id:    {
        type: String
    },
    users_id:   {
        type: Array
    },
    retweets:   {
        type: Array
    }
}, {
    timestamps: true
}) 

const Tweet = mongoose.model('Tweet', tweetSchema)

module.exports = Tweet