const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    name:	{
        type: String
    },
    birth:	{
        type: Date
    },
    tel:	{
        type: Number
    },
    tweet_id:  {
        type: Array
    },
    comments_id:  {
        type: Array
    },
    followers_id:  {
        type: Array
    },
    following_id:  {
        type: Array
    }
}, {
    timestamps: true
}) 

const User = mongoose.model('User', userSchema)

module.exports = User