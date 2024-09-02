import express from 'express';
import dotenv from 'dotenv';
import routes from './routes/index.js';
import cors from 'cors';
import connectDB from './config/connectDatabase.js';

dotenv.config();

const app = express();

app.use(express.json());

app.use(cors());

connectDB();

const port = process.env.PORT || 3000;

app.get('/', (req, res) =>{
    res.send('Hello, World!');
});

app.use('/api',routes);

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
});