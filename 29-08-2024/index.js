import express from "express";
import morgan from "morgan";

const app = express();

import winston from "winston";
const logger = winston.createLogger({
    // Log only if level is less than (meaning more severe) or equal to this
    level: "info",
    // Use timestamp and printf to create a standard log format
    format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.printf(
            (info) => `${info.timestamp} ${info.level}: ${info.message}`
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

// app.use(morgan(':method :url :status :res[content-length] - :response-time ms'));

app.get("/", (req, res) => {
    console.log('asdfwe');
        logger.log("error", "This is an error message");
      logger.log("warn", "This is a warning message");
      logger.log("info", "This is an info message");
      logger.log("verbose", "This is a verbose message");
      logger.log("debug", "This is a debug message");
      logger.log("silly", "This is a silly message");
    logger.log("info", "Request received: ", req);
    // res.status(200).send("Hello, World!");
    res.sendStatus(200);
});

app.post('/abc', (req, res) => {
    res.sendStatus(404);
});

app.listen(3000, () => {
    console.log("listening on");
});