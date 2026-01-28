import express from 'express'
import { handleAddBlog } from '../controllers/blog.controllers.js'
import { upload } from '../middlewares/multer.middlewares.js'
import { Blog } from '../models/blog.model.js'
import { handleUserComment } from '../controllers/comment.controllers.js'
import { Comment } from '../models/comment.model.js'
import { Authentication } from '../middlewares/auth.middlewares.js'

const router = express.Router()

router.post('/addBlog', Authentication, upload.single('coverImage'), handleAddBlog)

router.get('/:id', async (req, res) => {
    const blog = await Blog.findById(req.params.id).populate('createdBy')
    const comments = await Comment.find({ blogId: req.params.id }).populate('createdBy')
    // console.log("this blogggg", comments);
    res.render('singleBlog', {
        blog,
        user: req.user,
        comments
    })
})

router.post('/comment/:blogID', Authentication, handleUserComment)

export default router