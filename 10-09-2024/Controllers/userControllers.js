import { sendMailHelper } from "../utilities/mail.js";

export const signUp = async (req, res) => {
    console.log(req.body.email)
    await sendMailHelper({ to: req.body.email });
    res.status(200).json({ message: "from signup" });
}