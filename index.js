const express = require('express')
const exphbs = require('express-handlebars')
const querys = require('./routers/client')
const pool = require('./db/conn')

const app = express()

app.use(express.urlencoded({extended:true}))

app.use(express.json())

app.engine('handlebars', exphbs())
app.set('view engine', 'handlebars')

app.use(express.static('public'))

app.get('/client', (req,res) => {
    res.render('home')
})

app.use('/client', querys)



app.listen(3001)