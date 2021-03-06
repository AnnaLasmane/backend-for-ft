import express from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import chatRoutes from './routes/Chats.js';


dotenv.config();
const server = express();
server.use(bodyParser.json());
server.use(cors());

server.use('/chats', chatRoutes);

mongoose.connect(process.env.MONGOOSE_CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true },
    (err) => {
        if (err) {
            console.error(`Could not connect to the database: ${err}`);

        }
        console.log('Database is up and running');
    });

server.listen(process.env.PORT, () => {
    console.log(`Express is up and running on port ${process.env.PORT}`);
});