import { createTransport } from "nodemailer";


// export const sendMailToSystem = async (subject, body) => {
//     let from = `SprintUp System Mail ${process.env.SYSTEM_SENDER}`
//     await sendMailHelper(subject, body, process.env.SYSTEM_SENDER, process.env.SYSTEM_RECEIVER, process.env.SYSTEM_SENDER_PASSWORD, from);
// }

export const sendMailHelper = async ({subject, body, senderEmail, to, password, from}) => {

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

    await transporter.sendMail(mailOptions);

}