import express from 'express';
import { loggingMiddleware } from './loggingMiddleware.js';

const app = express();

const port = process.env.PORT || 3002;

app.use(express.json());

app.use(loggingMiddleware);

app.get('/', (req, res) => {
    console.log('Recieved request')
    res.status(200).json({ message: 'Request successful.' })
});

app.get('/second', (req, res) => {
    res.status(200).json({ message: 'second' })
})

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});