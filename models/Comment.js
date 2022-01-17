const mongoose = require("mongoose")

const CommentSchema = new mongoose.Schema({
    content:	{
        type: String
    },
    user_id:    {
        type: mongoose.Schema.Types.ObjectId, ref: "User"
    },
    tweets_id:   [
        {
            type: mongoose.Schema.Types.ObjectId, ref: "Tweet"
        }
    ]
}, {
    timestamps: true
}) 

const Comment = mongoose.model('Comment', CommentSchema)

module.exports = Comment