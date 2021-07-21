import mongoose from 'mongoose';

const chatSchema = mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

const chat = mongoose.model('Chats', chatSchema);

export default chat;