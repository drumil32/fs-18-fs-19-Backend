import { connect } from 'mongoose';

const connectDatabase = async () => {
    try {
        const conn = await connect(process.env.MONGO_URL, { dbName: process.env.DB });
        console.log(`MongoDB Connected : ${conn.connection.host}`);
    } catch (err) {
        console.log(err);
        process.exit(1);
    }
}

export default connectDatabase;