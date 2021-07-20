import express from 'express';
import Image from '../models/Image.js';

const router = express.Router();


router.get('/', async(req, res) => {
    try {
        const query = Image.find({});
        const images = await query.exec();

        res.json(images);
    } catch (e) {
        res.json({ error: true, message: e });
    }
});

export default router;