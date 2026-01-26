import { Blog } from "../models/blog.model.js";


export const handleAddBlog = async (req, res) => {
    // console.log(req.body);
    // console.log(req.file);
    const { title, description, coverImageURL, createdBy } = req.body

    const blog = await Blog.create({
        title,
        description,
        coverImageURL: `/images/${req.file.filename}`,
        createdBy: req.user._id
    })
    console.log("blog here", blog);
    // return res.send('/')
    return res.render('addBlog')
}