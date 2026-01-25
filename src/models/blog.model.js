import mongoose, { Mongoose, Schema } from "mongoose";

const BlogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    coverImageURL: {
        type: String,
    },
    createdBy: {
        type: Schema.Types.ObjectId,
        ref: 'BlogUser'
    }
}, { timestamps: true })


export const Blog = mongoose.model('Blog', BlogSchema)