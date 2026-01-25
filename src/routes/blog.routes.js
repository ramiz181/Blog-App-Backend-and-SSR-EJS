import express from 'express'
import { handleAddBlog } from '../controllers/blog.controllers.js'

const router = express.Router()

router.post('/addBlog', handleAddBlog)

export default router