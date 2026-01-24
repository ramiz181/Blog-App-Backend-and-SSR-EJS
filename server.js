import express from 'express'
import path from 'path'

const app = express()
const PORT = 8001

app.set('view engine', 'ejs')
app.set('views', path.resolve('./src/views'))


app.get('/', (req, res) => {
    res.render("home")
})

app.listen(PORT, () => console.log(`Server started at PORT ${PORT}`))