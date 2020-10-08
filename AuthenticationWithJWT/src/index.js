const express = require('express')
const userRouter = require('./routers/user')
const cors = require('cors')
require('dotenv').config()

const port = process.env.PORT

require('./db/db')

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use('/', userRouter)


app.listen(port, () => console.log(`Server running on port ${port}`))
