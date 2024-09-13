import express from 'express';
import dotenv from 'dotenv';
import routes from './router/index.js'
import connectDatabase from './config/connectDatabase.js';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

connectDatabase();

app.use(express.json());
app.use('/api',routes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});