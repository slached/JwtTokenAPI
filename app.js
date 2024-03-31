require('dotenv').config()

const express = require('express')
const mongoose = require("mongoose");
const cookieParser = require('cookie-parser')
const MongoStore = require('connect-mongo')
const session = require('express-session')


const app = express()
const port = 5000 || process.env.PORT

//middlewares
app.use(express.urlencoded({extended: true}))
app.use(cookieParser())

//session
app.set('trust proxy', 1) // trust first proxy
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    store: MongoStore.create({mongoUrl: process.env.MONGO_URI}),
    cookie:
        {
            secure: true,
        }
}))

//connect to the db
mongoose.connect(process.env.MONGO_URI).then(() => {
    app.listen(port, () => {
        console.log(`App listening on port ${port}`)
    })
}).catch(err => console.log(err))

//routes
app.use('/', require('./server/routes/main'))