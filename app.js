const express = require('express')
const app = express()
const ejsLayouts = require('express-ejs-layouts')

const indexRouter = require('./routes/index')

app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')
app.set('layout', 'layouts/layout')
app.use(ejsLayouts)
app.use(express.static('public'))
//require('dotenv').load()--depreciated

if(process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
}

//setup db 
const mongoose = require('mongoose')
mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true, useUnifiedTopology: true  })
    const db = mongoose.connection
    db.on('error', erroe =>  console.error(error))
    db.once('open', () => console.log('DB connection successfull'))

app.use('/', indexRouter)

app.listen(process.env.PORT, () => console.log(`Web server running on http://${process.env.IP}:${process.env.PORT}`) )