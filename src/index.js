import express from 'express';
import dotenv from 'dotenv';

import bodyParser from 'body-parser';
import imageRoutes from './routes/images.js';
import mongoose from 'mongoose';

dotenv.config();

const server = express();
server.use(bodyParser.json());

server.use('/images', imageRoutes);

server.get('/', (req, res) => {
    res.send('Hello');
});

mongoose.connect(
    process.env.MONGOOSE_CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true },
    (err) => {
        if (err) {
            console.log(`Could not connect to the database:`, err);
            return;
        }
        console.log('Database is up and running');
    });

server.listen(process.env.PORT, () => {
    console.log(`Server is up and running on port ${process.env.PORT}`);
});