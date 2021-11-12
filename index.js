const express = require('express')
const exphbs = require('express-handlebars')

const app = express()

const conn = require('./db/conn')

const Client = require('./models/Client')

const clientRoutes = require('./routers/clientRoutes')

app.use(express.urlencoded({extended:true}))

app.use(express.json())

app.engine('handlebars', exphbs())
app.set('view engine', 'handlebars')

app.use(express.static('public'))

app.use('/client', clientRoutes)

conn
    .sync()
    .then(() => {
        app.listen(3000)
    })
    .catch((err) => {
        console.log(err)
    })