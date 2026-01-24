import mongoose from "mongoose";


const User = new mongoose.Schema({
    fullName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    profileImageURL: {
        type: String,
        default: '',
    },
    role: {
        type: String,
        enum: ['User', 'Admin'],
        default: 'User'
    }

}, { timestamps: true })