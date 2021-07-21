import express from 'express';
import Chat from '../models/Chat.js';

const router = express.Router();

router.get('/', async(req, res) => {
    try {
        const query = Chat.find({}); 
        const chats = await query.exec();
        res.json(chats);
    } catch (e) {
        res.json({ error: true, message: e });
    }
});

router.post('/', async(req, res) => {
    const newChatData = {
        username: req.body.username,
        message: req.body.message,
    }
    const chatMessage = new Chat(newChatData);
    try {
        const chatEntity = await chatMessage.save();
        res.json(chatEntity);
    } catch (e) {
        res.json({ error: true, message: e });
    }
});



export default router;