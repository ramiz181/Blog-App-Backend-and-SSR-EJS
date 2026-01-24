import express from 'express'
import path from 'path'
import userRoutes from './src/routes/user.routes.js'
import staticRoutes from './src/routes/static.routes.js'
import { dbUserConnection } from './src/config/db.config.js'
import dotenv from 'dotenv'

const app = express()
const PORT = 8001
dotenv.config();
dbUserConnection()
app.set('view engine', 'ejs')
app.set('views', path.resolve('./src/views'))

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/user', userRoutes)
app.use('/', staticRoutes)

app.get('/', (req, res) => {
    res.render("home")
})
app.listen(PORT, () => console.log(`Server started at PORT ${PORT}`))