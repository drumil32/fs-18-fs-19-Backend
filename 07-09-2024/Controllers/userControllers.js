import { sendMailHelper } from "../utilities/mail.js";

export const signUp = async (req, res) => {
    await sendMailHelper({ to: req.body.email });
    res.status(200).json({ message: "from signup" });
}