import express from 'express'

const app = express()
const PORT = 8001

app.get('/', (req, res) => {
    res.send("Hi")
})

app.listen(PORT, () => console.log(`Server started at PORT ${PORT}`))