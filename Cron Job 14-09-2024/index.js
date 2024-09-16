import { schedule } from 'node-cron';
import connectDB, { Task } from './temp.js';
import dotenv from 'dotenv';

dotenv.config();

// let min, hr, dayOfMonth, month, dayOfWeek;

// (min ? min : '*') + ' ' + (hr ? hr : '*') + ' ' + (dayOfMonth ? dayOfMonth : '*') + ' ' + (month ? month : '*') + ' ' + (dayOfWeek ? dayOfWeek : '*')

// const task = schedule('* * * * *', () => {
//     console.log('Running a task every minute');
// });

// task.stop();

// cron-job => it will run on fix interval


// event => it going to happen only one time

setTimeout(() => {
    // execute task here.
}, 1000)
Date.now()
/*
    time
    status
    sender
    receiver
    subject
*/

// encryption and decryption
// hasing
// encoding and decoding => signature

/*
    isCronJob => true
        use this info min, hr, dayOfMonth, month, dayOfWeek
    
    isCronJob => false
        use this timeStamp

    sender, reciver, subject, body, password,
*/

// const schedule = require('node-schedule'); // Assuming you're using node-schedule for cron jobs
import { nanoid } from 'nanoid';

const tasks = {}; // To store active tasks in memory for reference

connectDB();
// app.post('/',
const post = async () => {
    // const { min, hr, dayOfMonth, month, dayOfWeek, sender, receiver, subject, body, password, isCronJob, timeStamp } = {};
    const isCronJob = true;
    try {
        const taskId = nanoid();

        if (isCronJob) {
            // Create cron expression
            // const cronExpression = `${min || '*'} ${hr || '*'} ${dayOfMonth || '*'} ${month || '*'} ${dayOfWeek || '*'}`;

            // Schedule task
            const task = schedule('* * * * *', () => {
                sendMail(sender, receiver, subject, body, password);
            });

            // Store active task in memory
            tasks[taskId] = task;
            console.log(task);
            // Save task to database
            const newTask = new Task({
                id: taskId,
                // min, hr, dayOfMonth, month, dayOfWeek, sender, receiver, subject, body, password, isCronJob
                task
            });
            await newTask.save();

            // res.send({ message: 'Cron job scheduled', taskId });
        } else {
            // For one-time tasks with specific timeStamp
            const taskDate = new Date(timeStamp); // Assuming timeStamp is in 'DD-MM-YYYY HH:MM:SS' format
            const delay = taskDate.getTime() - Date.now();

            if (delay > 0) {
                const task = setTimeout(() => {
                    sendMail(sender, receiver, subject, body, password);
                }, delay);

                tasks[taskId] = task;

                // Save the one-time task to the database
                const newTask = new Task({
                    id: taskId,
                    sender, receiver, subject, body, password, isCronJob: false, timeStamp
                });
                await newTask.save();

                // res.send({ message: 'One-time task scheduled', taskId });
            } else {
                // res.status(400).send({ error: 'Invalid timestamp' });
            }
        }
    } catch (error) {
        console.log(error);
        // res.status(500).send({ error: 'Error scheduling task' });
    }
};
post()