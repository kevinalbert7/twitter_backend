const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    content:	{
        type: String
    },
    user_id:    {
        type: String
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

const Tweet = mongoose.model('Tweet', tweetSchema)

module.exports = Tweet