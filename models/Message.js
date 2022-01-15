const mongoose = require("mongoose")

const messageSchema = new mongoose.Schema({
    content:	{
        type: String
    },
    user_id:    {
        type: String
    },
    users_id:   {
        type: Array
    },
    tweets:   {
        type: Array
    }
}, {
    timestamps: true
}) 

const Message = mongoose.model('Message', messageSchema)

module.exports = Message