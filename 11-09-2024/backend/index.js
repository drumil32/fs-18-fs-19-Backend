import express from 'express';
import { sendMail } from './mail.js';
import dotenv from 'dotenv';
import uploadPics from './middlewares/uploadPhotos.js';
import cors from 'cors';

dotenv.config();
const app = express();

app.use(cors({ origin: 'http://localhost:5174' }));
app.use(express.urlencoded());
app.use(express.json());
app.use('/profile-picture', express.static("profilePics"));

app.post('/send-mail', (req, res) => {
    console.log(process.env.SENDER_EMAIL)
    const { receiverEmail, subject, body } = req.body;
    sendMail(process.env.SENDER_EMAIL, process.env.APP_PASSWORD, receiverEmail, subject, body, res);
});

const storage = [];

app.post('/user', uploadPics.single('profilePic'), (req, res) => {
    const { userName } = req.body;
    const { fileName } = req;
    storage.push({ userName, fileName });
    console.log(storage);
    res.status(200).send('Your profile picture has been uploaded');
});

// req params
// req query params
app.get('/user/:userName', (req, res) => {
    const { userName } = req.params;
    const user = storage.find(user => user.userName == userName);
    console.log(user);
    if (!user) {
        res.status(404).json({ message: 'User not found' });
    } else {
        res.status(200).json({
            userName: user.userName,
            imageUrl: `http://localhost:3000/profile-picture/${user.fileName}`
        })
    }
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

/*
    go to mail
        open manage google account
            search "app password"
                create a application
                    copy the password and use it make sure that you are removing the space from the password
*/