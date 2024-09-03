import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        // match: /[a-zA-Z ]{3,50}/
    },
    age: {
        type: Number,
        required: true,
        min: 18,
        max: 70,
        // match: /[0-9]{2}/
    },
    city: {
        type: String,
        required: true,
    },
    //   email: {
    //     type: String,
    //     unique: true,
    //     lowercase: true,
    //     // match: /[a-z0-9\.\_]+\@[a-z0-9]+\.[a-z]{2,5}/
    //   },
});

const userModel = mongoose.model("user", userSchema);

export default userModel;