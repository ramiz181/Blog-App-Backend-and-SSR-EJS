import { Comment } from "../models/comment.model.js"

export const handleUserComment = async (req, res) => {
    await Comment.create({
        comment: req.body.comment,
        createdBy: req.user._id,
        blogId: req.params.blogID
    })
    return res.redirect(`/blog/${req.params.blogID}`)
}