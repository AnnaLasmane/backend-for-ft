import express from 'express';
import ChatMessage from '../models/ChatMessage.js';

const router = express.Router();

router.get('/', async(req, res) => {
    try {
        const query = ChatMessage.find({}); 
        const chatMessages = await query.exec();
        res.json(chatMessages);
    } catch (e) {
        res.json({ error: true, message: e });
    }
});

router.post('/', async(req, res) => {
    const newChatMessageData = {
        username: req.body.username,
        message: req.body.message,
    }
    const chatMessage = new ChatMessage(newChatMessageData);
    try {
        const chatEntity = await chatMessage.save();
        res.json(chatEntity);
    } catch (e) {
        res.json({ error: true, message: e });
    }
});



export default router;