import { createTransport } from "nodemailer";
import kickbox from 'kickbox';

// export const sendMailToSystem = async (subject, body) => {
//     let from = `SprintUp System Mail ${process.env.SYSTEM_SENDER}`
//     await sendMailHelper(subject, body, process.env.SYSTEM_SENDER, process.env.SYSTEM_RECEIVER, process.env.SYSTEM_SENDER_PASSWORD, from);
// }
var kb = kickbox.client('API_KEY').kickbox();

export const sendMailHelper = async ({ subject, body, senderEmail, to, password, from }) => {

    kb.verify(to, function (err, response) {
        // Let's see some results
        console.log(to)
        console.log(err);  // If there was an error, print it
        console.log(response.body);
      });

    const transporter = createTransport({
        service: 'gmail',
        auth: {
            user: 'akheniad@gmail.com', // Use environment variables instead of hardcoding
            pass: process.env.PASSWORD, // Use environment variables instead of hardcoding
        },
    });

    const mailOptions = {
        // from: 'akheniadrumil345@gmail.com',
        to,
        subject: "test",
        html: '<h1>this is body</h1>'
    }

    try {
        const resp = await transporter.sendMail(mailOptions);
        console.log('Email sent successfully');
        console.log(resp)
    }catch(error){
        console.log(error);
    }

}