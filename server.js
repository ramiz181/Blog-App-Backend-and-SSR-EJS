import express from 'express'
import path from 'path'
import userRoutes from './src/routes/user.routes.js'
import staticRoutes from './src/routes/static.routes.js'
import blogRoutes from './src/routes/blog.routes.js'
import { dbUserConnection } from './src/config/db.config.js'
import dotenv from 'dotenv'
import { Authentication } from './src/middlewares/auth.middlewares.js'
import { Blog } from './src/models/blog.model.js'
import cookieParser from 'cookie-parser'

const app = express()
const PORT = 8001
dotenv.config();
dbUserConnection()

app.set('view engine', 'ejs')
app.set('views', path.resolve('./src/views'))
app.use(express.static(path.resolve('./public')));

app.use(express.json())
app.use(cookieParser())
app.use(express.urlencoded({ extended: false }))

app.use('/user', userRoutes)
app.use('/', staticRoutes)

app.use(Authentication)
app.use('/blog', blogRoutes)
app.get('/', async (req, res) => {

    const allBlogs = await Blog.find({})
    res.render("home", {
        user: req.user,
        allBlogs
    })
})
app.listen(PORT, () => console.log(`Server started at PORT ${PORT}`))