import { EmailRegex, NameRegex, PasswordRegex } from "../constants/regex.js";

export const validateFirstName = (req, res, next) => {
    const { firstName } = req.body;    
    if (!firstName || !firstName.match(NameRegex)) {
        return res.status(400).json({ error: "Invalid first name. First name should contain only alphbets." });
    }
    next();
}
export const validateLastName = (req, res, next) => {
    const { lastName } = req.body;
    if (!lastName || !lastName.match(NameRegex)) {
        return res.status(400).json({ error: "Invalid last name. Last name should contain only alphbets." });
    }
    next();
}
export const validateEmail = (req, res, next) => {
    const { email } = req.body;
    if (!email || !email.match(EmailRegex)) {
        return res.status(400).json({ error: "Invalid email." });
    }
    next();
}
export const validatePassword = (req, res, next) => {
    const { password } = req.body;
    if (!password || !password.match(PasswordRegex)) {
        return res.status(400).json({ error: 'Invalid password' });
    }
    next();
}
export const validateConfirmPassword = (req, res, next) => {
    const { confirmPassword, password } = req.body;
    if (!confirmPassword || confirmPassword != password) {
        return res.status(400).json({ error: 'Password and confirm password do not match' });
    }
    next();
}