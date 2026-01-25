import express from 'express'
import path from 'path'
import userRoutes from './src/routes/user.routes.js'
import staticRoutes from './src/routes/static.routes.js'
import { dbUserConnection } from './src/config/db.config.js'
import dotenv from 'dotenv'
import { Authentication } from './src/middlewares/auth.middlewares.js'
import cookieParser from 'cookie-parser'

const app = express()
const PORT = 8001
dotenv.config();
dbUserConnection()
app.set('view engine', 'ejs')
app.set('views', path.resolve('./src/views'))

app.use(express.json())
app.use(cookieParser())
app.use(express.urlencoded({ extended: false }))

app.use('/', userRoutes)
app.use('/', staticRoutes)

app.get('/', Authentication, (req, res) => {
    res.render("home", {
        user: req.user
    })
})
app.listen(PORT, () => console.log(`Server started at PORT ${PORT}`))