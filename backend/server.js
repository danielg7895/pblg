import express from 'express'
import { userRoutes } from './routers/userRoutes.js'
import { postRoutes } from './routers/postRoutes.js'
import connectDatabase from './database/database.js'
import dotenv from 'dotenv'
import { errorMiddleware, requestMiddleware } from './middlewares/middlewares.js'

dotenv.config()
connectDatabase()

// https://expressjs.com/
const app = express()
const port = 5000

// https://expressjs.com/en/4x/api.html#req.body
app.use(express.json()) // for parsing application/json
//app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded -> not planning using this for now

app.get('/', (req, res) => {
    res.send("Hellow! (´• ω •`)")
})

app.use(requestMiddleware)

app.use('/api/user', userRoutes)
app.use('/api/post', postRoutes)

app.use(errorMiddleware)

app.listen(port, () => {
    console.log(`App listening on port ${port}`.brightMagenta.bold)
})