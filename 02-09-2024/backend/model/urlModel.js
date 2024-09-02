import mongoose, { Schema } from "mongoose";

const urlSchema = new Schema({
    originalUrl: {
        type: String,
        required: true
    },
    shortedUrl: {
        type: String,
        required: true
    }
});

const UrlModel = mongoose.model('url', urlSchema);

export default UrlModel;