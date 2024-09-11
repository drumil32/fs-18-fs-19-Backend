import multer from 'multer';
import path from 'path';
import { nanoid } from 'nanoid';

const config = multer.diskStorage({
    destination: './profilePics',
    filename: (req, file, cb) => {
        const ext = path.extname(file.originalname);
        const fileName = req.body.userName + nanoid(5) + ext;
        req.fileName = fileName;
        cb(null, fileName);
    },
    fileSize: 10_000 * 1024
});

const uploadPics = multer({ storage: config });

export default uploadPics;