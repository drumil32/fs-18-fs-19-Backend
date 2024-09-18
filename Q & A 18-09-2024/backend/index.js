import express from 'express';
import {  studentAuthMiddleware, teacherAuthMiddleware } from './authMiddleware.js';
import { generateToken } from './generateToken.js';
import dotenv from 'dotenv';
import cors from 'cors';
dotenv.config();

const app = express();
app.use(cors({ origin: 'http://localhost:5173' }));
app.use(express.json());

app.get('/get-marks', studentAuthMiddleware, (req, res) => {
    res.send('here is your marks');
});

app.post('/add-marks', teacherAuthMiddleware, (req, res) => {
    res.send('marks added successfully!');
})

app.post('/login', (req, res) => {
    const { email } = req.body;
    const token = generateToken(email);
    if (!token) {
        return res.status(401).json({ message: 'Invalid Credentials' });
    }
    res.json({ token });
});

const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});