import express from 'express';
import { signUp } from '../Controllers/userControllers.js';
import { validateConfirmPassword, validateEmail, validateFirstName, validateLastName, validatePassword } from '../middlewares/signUpValidation.js';

const router = express.Router();

router.post('/sign-up',
    validateFirstName,
    validateLastName,
    validateEmail,
    validatePassword,
    validateConfirmPassword,
    signUp);

export default router;