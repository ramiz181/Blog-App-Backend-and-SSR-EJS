import express from 'express'
import { Authentication } from '../middlewares/auth.middlewares.js'

const router = express.Router()

router.get('/signup', (req, res) => {
    res.render('signup')
})

router.get('/login', (req, res) => {
    if (req.query.error) {
        console.log((req.query.error))
    }
    res.render('login')
})
router.get('/addBlog', Authentication, (req, res) => {
    res.render('addBlog', {
        user: req.user
    })
})

export default router