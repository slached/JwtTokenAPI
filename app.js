require('dotenv').config()

const express = require('express')
const mongoose = require("mongoose");
const cookieParser = require('cookie-parser')

const app = express()
const port = 5000 || process.env.PORT

//middlewares
app.use(express.urlencoded({extended: false}))
app.use(express.json())
app.use(cookieParser())

//connect to the db
mongoose.connect(process.env.MONGO_URI).then(() => {
    app.listen(port, () => {
        console.log(`App listening on port ${port}`)
    })
}).catch(err => console.log(err))

//routes
app.use('/', require('./server/routes/main'))