const express = require('express')
const router = express.Router()
const pool = require('../db/conn')

router.post('/insert', (req,res,next) => {
    const nome = req.body.nome
    const sexo = req.body.sexo
    const nascimento = req.body.nascimento
    const cep = req.body.cep
    const bairro = req.body.bairro
    const uf = req.body.uf
    const cidade = req.body.cidade
    const telefone = req.body.telefone
    const email = req.body.email

    const sql = `INSERT INTO clientes (??, ??, ??, ??, ??, ??, ??, ??, ??) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`
    const data = ['nome','sexo', 'nascimento', 'cep', 'bairro', 'uf', 'cidade', 'telefone', 'email',
    nome, sexo, nascimento, cep, bairro, uf, cidade,telefone, email]

    pool.query(sql, data, (err) => {
        if (err){
            console.log(err)
            return
        }

        res.redirect('/client/lista')
    })
})

router.get('/lista', (req,res) => {
    const sql = "SELECT * FROM clientes"

    pool.query(sql, (err, data) => {
        if(err){
            console.log(err)
            return
        }

        const clientes = data

        res.render('lista', {clientes})
    })
})

router.get('/listacliente/:id', (req, res) => {
    const id = req.params.id

    const sql = `SELECT * FROM clientes WHERE ?? = ?`

    const data = ['id', id]

    pool.query(sql, data, (err, data) => {
        if(err){
            console.log(err)
            return
        }

        const cliente = data[0]

        res.render('listaumcliente', {cliente} )
    })
})

module.exports = router