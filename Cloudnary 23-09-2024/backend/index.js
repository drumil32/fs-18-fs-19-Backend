import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { v2 as cloudinary } from 'cloudinary';
import Multer from "multer";

const app = express();
dotenv.config();

app.use(express.json());
app.use(express.urlencoded());
app.use(cors({
    origin: 'http://localhost:5173'
}));

const storage = new Multer.memoryStorage();
const upload = Multer({
    storage,
});

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET,
});
async function handleUpload(file) {
    const res = await cloudinary.uploader.upload(file, {
        resource_type: "auto",
    });
    return res;
}

app.post("/upload", upload.single("my_file"), async (req, res) => {
    try {
        const b64 = Buffer.from(req.file.buffer).toString("base64");
        let dataURI = "data:" + req.file.mimetype + ";base64," + b64;
        const cldRes = await handleUpload(dataURI);
        res.json(cldRes);
    } catch (error) {
        console.log(error);
        res.send({
            message: error.message,
        });
    }
});

app.get('/', (req, res) => {
    res.send('Hello, world!');
})

app.listen(3000, () => {
    console.log('Server is running on port 3000');
})