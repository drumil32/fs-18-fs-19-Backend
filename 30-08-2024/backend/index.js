import express from "express";
import mongoose, { connect } from "mongoose";
import dotenv from 'dotenv';
import cors from 'cors';

const port = 4000;
dotenv.config();

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(cors({
    origin: "http://localhost:5173"
}));

const connectDB = async () => {
    try {
        const conn = await connect(process.env.MONGO_URL, { dbName: "test3" });
        console.log(`MongoDB Connected : ${conn.connection.host}`);
    } catch (err) {
        console.log(err);
        process.exit(1);
    }
}
connectDB();
app.listen(port, () => console.log("Server started"));

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        // match: /[a-zA-Z ]{3,50}/
    },
    age: {
        type: Number,
        required: true,
        min: 18,
        max: 70,
        // match: /[0-9]{2}/
    },
    city: {
        type: String,
        required: true,
    },
});

const userModel = mongoose.model("user", userSchema);

app.get("/users", async (req, res) => {
    const dataFromDB = await userModel.find();
    res.send(dataFromDB);
});

app.post("/newUser", async (req, res) => {
    console.log('newUser is invoked')
    console.log(req.body);
    try {
        const dataToSave = new userModel(req.body);
        const newUser = await dataToSave.save();
        res.status(201).send(newUser);
    } catch (err) {
        console.log(err)
        res.status(500).send("Error: " + err);
    }
});

app.delete("/deleteUser/:id", async (req, res) => {
    const id = req.params.id;
    //   const { id } = req.params;

    const deletedData = await userModel.findByIdAndDelete(id);
    if (deletedData) {
        res.status(200).send("User Deleted");
    } else {
        res.status(500).send("User could not be deleted");
    }
});