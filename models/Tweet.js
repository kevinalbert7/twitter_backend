const mongoose = require("mongoose")

const TweetSchema = new mongoose.Schema({
    content:	{
        type: String
    },
    user_id:    {
        type: mongoose.Schema.Types.ObjectId, ref: "User"
    },
    comments_id:   [
        {
            type: mongoose.Schema.Types.ObjectId, ref: "Comment"
        }
    ],
    retweets:   {
        type: Array
    }
}, {
    timestamps: true
}) 

const Tweet = mongoose.model('Tweet', TweetSchema)

module.exports = Tweet