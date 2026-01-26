import express from 'express'
import { handleAddBlog } from '../controllers/blog.controllers.js'
import { upload } from '../middlewares/multer.middlewares.js'
import { Blog } from '../models/blog.model.js'

const router = express.Router()

router.post('/addBlog', upload.single('coverImage'), handleAddBlog)

router.get('/:id', async (req, res) => {
    const blogID = (req.params.id)

    const blog = await Blog.findById(req.params.id)
    console.log("this blogggg", blog);

    res.render('singleBlog', {
        blog
    })


})

export default router