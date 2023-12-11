import express from "express";
import {
    PORT,
    mongoURl
} from "../backend/config.js";
import mongoose from 'mongoose';
import orderRoute from '../backend/routes/orderRoute.js';
import cors from 'cors';

const app = express();

app.use(express.json());

app.use(cors());

// app.use(
//     cors({
//         origin: 'http://localhost:8080',
//         methods: ['GET', 'POST', 'PUT', 'DELETE'],
//         allowedHeaders: ['Content-Type'],
//     }));

app.get('/', (req, res) => {
    console.log(req)
    return res.status(200).send('Welcome to Milk Store');
});
app.use('/orders', orderRoute);
mongoose.connect(mongoURl)
    .then(() => {
        console.log(`App connected to database`);
        app.listen(PORT, () => {
            console.log(`App is runing to port: ${PORT}`);
        });
    })
    .catch((error) => {
        console.log(error.message);
        res.status(500).send({
            message: error.message
        });

    });