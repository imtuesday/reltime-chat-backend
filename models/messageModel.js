const mongoose = require('mongoose');
const {Schema, model} = mongoose;

const messageSchema = new Schema(
   {
    message: {
        text: {
            type: String,
            required: true 
        },
    },
    users: Array,
    sender: {   
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },

   },
   {
        timestamps: true,

   }
    
)

const messageModel = model("Messages", messageSchema)

module.exports = messageModel;