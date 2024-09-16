import { Schema, model } from 'mongoose';

const taskSchema = new Schema({
    id: {
        type: String,
        required: true,
        unique: true
    },
    min: String,
    hr: String,
    dayOfMonth: String,
    month: String,
    dayOfWeek: String,
    sender: String,
    receiver: String,
    subject: String,
    body: String,
    password: String,
    isCronJob: Boolean,
    timeStamp: String,
    isActive: {
        type: Boolean,
        default: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

export const Task = model('Task', taskSchema);

import { set, connect } from 'mongoose';

const connectDB = async () => {
    try {
        set("strictQuery", false);
        const conn = await connect(process.env.MONGO_URL, { dbName: process.env.DB });
        console.log(`MongoDB Connected : ${conn.connection.host}`);
    } catch (err) {
        console.log(err.message)
        // console.log(err);
        process.exit(1);
    }
}

export default connectDB;