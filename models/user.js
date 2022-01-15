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
    tweets:  {
        type: Array
    },
    comments:  {
        type: Array
    },
    followers:  {
        type: Array
    },
    followings:  {
        type: Array
    }
}, {
    timestamps: true
}) 

const User = mongoose.model('User', userSchema)

module.exports = User