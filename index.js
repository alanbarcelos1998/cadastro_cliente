const express = require('express')
const exphbs = require('express-handlebars')
const clientRoutes = require('./routers/clientRoutes')
const pool = require('./db/conn')

const app = express()

app.use(express.urlencoded({extended:true}))

app.use(express.json())

app.engine('handlebars', exphbs())
app.set('view engine', 'handlebars')

app.use(express.static('public'))

app.use('/client', clientRoutes)

app.listen(3001, () => {console.log('Conectado ao servidor!')})