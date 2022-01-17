const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    username:	{
        type: String
    },
    password:   {
        type: String
    },
    birth:	{
        type: Date
    },
    tel:	{
        type: String
    },
    tweets:  [
        {
            type: mongoose.Schema.Types.ObjectId, ref: "Tweet"
        }
    ],
    comments:  [
        {
            type: mongoose.Schema.Types.ObjectId, ref: "Comment"
        }
    ],
    followers:  [
        {
            type: mongoose.Schema.Types.ObjectId, ref: "User"
        }
    ],
    followings:  [
        {
            type: mongoose.Schema.Types.ObjectId, ref: "User"
        }
    ],
}, {
    timestamps: true
}) 

const User = mongoose.model('User', userSchema)

module.exports = User