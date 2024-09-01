import { logger } from "../index.js";

export const validatePassword = (req, res, next) => {
    const { password } = req.body;
    logger.log("info","validating password");
    // validate password
    // if validation fails
        // then send res.status(400).json({message: 'Invalid password'});
    // else 
        next();
}