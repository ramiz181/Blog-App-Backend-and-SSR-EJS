import mongoose from "mongoose";
import bcrypt from 'bcrypt'

const UserSchema = new mongoose.Schema({
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
        select: false
    },
    profileImageURL: {
        type: String,
        default: './images/default.png',
    },
    role: {
        type: String,
        enum: ['User', 'Admin'],
        default: 'User'
    }

}, { timestamps: true })


UserSchema.pre('save', async function () {
    if (!this.isModified('password')) return
    this.password = await bcrypt.hash(this.password, 10)
    return
})

UserSchema.static('AuthenticateUser', async function (email, password) {

    const user = await this.findOne({ email }).select('+password')
    if (!user) throw new Error("User not found")

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) throw new Error("Incorrect password")

    user.password = undefined
    return user
})

export const BlogUser = mongoose.model('BlogUser', UserSchema)