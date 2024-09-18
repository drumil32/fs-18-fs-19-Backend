import e from 'express';
import jwt from 'jsonwebtoken';

const database = [
    { email: 'user1@example.com', role: 'student' },
    { email: 'user2@example.com', role: 'teacher' }
];

export const generateToken = (email) => {
    const user = database.find(entry => entry.email === email);
    if (!user) {
        return null;
    }
    const payload = { email, role: user.role };
    const token = jwt.sign(payload, process.env.JWT_SECERT);
    return token;
};

// encryption
// decoding
// hashing