import express from 'express';
import { sendMail } from './mail.js';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

app.use(express.json());

app.post('/send-mail', (req, res) => {
    console.log(process.env.SENDER_EMAIL)
    const { receiverEmail, subject, body } = req.body;
    sendMail(process.env.SENDER_EMAIL, process.env.APP_PASSWORD, receiverEmail, subject, body,res);

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