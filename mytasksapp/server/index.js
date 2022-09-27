import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import tasksRoute from './routes/tasks.js'

const app = express();
dotenv.config();

//Middlewares
app.use(bodyParser.json({limit:"30mb",extended:true}));
app.use(bodyParser.urlencoded({limit:"30mb",extended:true}));
app.use(cors());

//Routes
app.use('/tasks',tasksRoute);

//DB Conection
const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.DB_CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true})
    .then( () => app.listen(PORT, () => console.log(`Server listening on port ${PORT}`)))
    .catch((err) => console.log(err))

