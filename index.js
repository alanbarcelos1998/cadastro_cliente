const express = require('express')
const exphbs = require('express-handlebars')
const querys = require('./routers/cliente')
const pool = require('./db/conn')

const app = express()

app.use(express.urlencoded({extended:true}))

app.use(express.json())

app.engine('handlebars', exphbs())
app.set('view engine', 'handlebars')

app.use(express.static('public'))

app.get('/cliente', (req,res) => {
    res.render('home')
})

app.use('/cliente', querys)



app.listen(3001)