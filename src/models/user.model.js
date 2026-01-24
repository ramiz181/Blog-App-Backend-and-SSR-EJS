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


UserSchema.pre('save', async function (next) {

    if (!this.isModified('password')) return next
    this.password = await bcrypt.hash(this.password, 10)
    next
})

UserSchema.static('matchPassword', async function (email, password) {

    const user = await this.findOne({ email })
    if (!user) throw new Error("User not found")

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) throw new Error("Incorrect password")

    return user;

})

export const BlogUser = mongoose.model('BlogUser', UserSchema)