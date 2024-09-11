import { createTransport } from 'nodemailer';
import kickbox from 'kickbox';

export const sendMail = (senderEMail, appPassword, receiverEmail, subject, body,res) => {
    var kb = kickbox.client(process.env.KICKBOX_API_KEY).kickbox();

    kb.verify(receiverEmail, async function (err, response) {
        if (response) {
            if (response.body.result == 'deliverable') {
                const transport = createTransport({
                    service: 'gmail',
                    auth: {
                        user: senderEMail,
                        pass: appPassword
                    }
                });
                try {
                    await transport.sendMail({
                        from: senderEMail,
                        to: receiverEmail,
                        subject: subject,
                        text: body
                    });
                } catch (error) {
                    res.status(500).send('Internal Server Error.');
                }
            } else {
                res.status(400).send('Invalid email address.');
            }
        } else {
            res.status(500).send('Internal Server Error.');
        }
    });
}