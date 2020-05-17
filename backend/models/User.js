const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema;
const newUser = {

    firstName: {
        type: String,
        trim: true,
        required: true,
        max: 32
    },
    lastName: {
        type: String,
        trim: true,
        required: true,
        max: 32
    },
    photo: {
        data: Buffer,
        contentType: String
    },
    friends: [{ type: ObjectId, ref: 'User', required: true }]
}

const UserSchema = new mongoose.Schema(newUser, { timestamps: true });

const User = mongoose.model("User", UserSchema);
module.exports = User;