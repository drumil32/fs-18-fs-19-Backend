import { logger } from "../index.js";

export const validatePhoneNumber = (req, res, next) => {
    const { phoneNumber } = req.body;
    logger.log("info", "validating phone number");
    // validate phone number
    // if validation fails
    // then send res.status(400).json({message: 'Invalid phone number'});
    // else 
    next();
}