import jwt from 'jsonwebtoken';

export const studentAuthMiddleware = (req, res, next) => {
    if (req.headers.authorization) {
        const token = req.headers.authorization.split(' ')[1];

        try {
            const data = jwt.verify(token, process.env.JWT_SECERT);
            if (data.role !== 'student') {
                res.status(403).json({ error: 'Forbidden' });
                return;
            }
        } catch (error) {
            res.status(401).json({ message: 'Invalid token' });
            console.log(error);
            return;
        }
        // Verify token here
        // If valid, set req.user to the user object
        // If not, return an error response
        next();
    } else {
        res.status(401).json({ message: 'Unauthorized' });
    }
}

export const teacherAuthMiddleware = (req, res, next) => {
    if (req.headers.authorization) {
        const token = req.headers.authorization.split(' ')[1];

        try {
            const data = jwt.verify(token, process.env.JWT_SECERT);
            if (data.role !== 'teacher') {
                res.status(403).json({ message: 'Forbidden' });
                return;
            }
        } catch (error) {
            res.status(401).json({ message: 'Invalid token' });
            console.log(error);
            return;
        }
        // Verify token here
        // If valid, set req.user to the user object
        // If not, return an error response
        next();
    } else {
        res.status(401).json({ error: 'Unauthorized' });
    }
}

/*
    user1 => student 
        /get-marks
    user2 => teacher
        /add-marks
*/