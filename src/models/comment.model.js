import mongoose from "mongoose";

const Comments = new mongoose.Schema({
    comment: {
        type: String,
        required: true
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'BlogUser',
    },
    blogId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Blog'
    }
})
export const Comment = mongoose.model('comment', Comments)