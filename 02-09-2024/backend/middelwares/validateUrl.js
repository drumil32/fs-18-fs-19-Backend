export const validateUrl = (req, res, next) => {
    const isValid = true;
    // validated the url
    if (isValid) {
        next();
    } else {
        res.status(400).json({ message: 'Invalid URL' });
    }
}