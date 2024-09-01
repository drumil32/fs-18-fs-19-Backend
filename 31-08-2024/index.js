import express from 'express';
import winston from "winston";
import dotenv from "dotenv";
import { validatePhoneNumber } from './middlewares/validatePhoneNumber.js';
import { validatePassword } from './middlewares/validatePassword.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

export const logger = winston.createLogger({
    // Log only if level is less than (meaning more severe) or equal to this
    level: "info",
    // Use timestamp and printf to create a standard log format
    format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.printf(
            (data) => `${data.timestamp} ${data.level}: ${data.message}`
        )
    ),
    // Log to the console and a file
    transports: [
        new winston.transports.Console(),
        new winston.transports.File({ filename: "logs/app.log" }),
    ],
});

app.use((req, res, next) => {
    // Log an info message for each incoming request
    logger.info(`Received a ${req.method} request for ${req.url}`);
    next();
});

app.get('/', (req, res) => {
    logger.log("debug","this is mesg")
    res.send('Hello, World!');
});

app.post('/register-user',
    // validatePhoneNumber,
    // validatePassword,
    (req, res) => {
        logger.log("error", "Register user is invoked");
        res.status(200).json({ message: "user is registered successfully!" });
    });

app.put('/update-user-profile',
    validatePhoneNumber,
    validatePassword,
    (req, res) => {
        logger.log("info", "Update user profile is invoked");
        res.status(200).json({ message: "user profile is updated successfully!" });
    });

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});