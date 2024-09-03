import express from "express";
import router from "./routes/userRoutes.js";
import cors from "cors";
import dotenv from 'dotenv';
import connectDB from "./config/connectDatabase.js";

dotenv.config();

const PORT = process.env.PORT || 3000;

const app = express();

connectDB();

app.use(cors({ origin: "http://localhost:5173" }));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/", router);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});