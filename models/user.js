const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema({
    username:	{
        type: String
    },
    email:   {
        type: String,
        unique: true,
        required: true
    },
    password:   {
        type: String,
		required: true
    },
    tel:	{
        type: String
    },
    birth:	{
        type: Date
    },
    profilePicture:   {
        type: String,
        date: Date
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

const User = mongoose.model('User', UserSchema)

module.exports = User