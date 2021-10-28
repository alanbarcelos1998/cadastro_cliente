const { application } = require('express')
const express = require('express')
const router = express.Router()
const pool = require('../db/conn')

router.post('/inserir', (req,res,next) => {
    const nome = req.body.nome
    const sexo = req.body.sexo
    const nascimento = req.body.nascimento
    const cep = req.body.cep
    const telefone = req.body.telefone
    const email = req.body.email

    const sql = `INSERT INTO clientes (??, ??, ??, ??, ??, ??) VALUES (?, ?, ?, ?, ?, ?)`
    const data = ['nome','sexo', 'nascimento', 'cep', 'telefone', 'email',
    nome, sexo, nascimento, cep, telefone, email]

    pool.query(sql, data, (err) => {
        if (err){
            console.log(err)
            return
        }

        res.redirect('/cliente/lista')
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

router.get('/editar/:id', (req,res) => {
    const id = req.params.id

    const sql = `SELECT * FROM clientes WHERE ?? = ?`

    const data = ['id', id]

    pool.query(sql, data, (err, data) => {
        if(err) {
            console.log(err)
            return
        }

        const cliente = data[0]

        res.render('editacliente', {cliente})
    })
})

router.post('/editar', (req,res) => {
    const id = req.body.id
    const nome = req.body.nome
    const sexo = req.body.sexo
    const nascimento = req.body.nascimento
    const cep = req.body.cep
    const telefone = req.body.telefone
    const email  = req.body.email

    const sql = `UPDATE clientes SET ?? = ?, ?? = ?, ?? = ?, ?? = ?, ?? = ?, ?? = ? WHERE ?? = ?`

    const data = ['nome', nome, 'sexo', sexo, 'nascimento', nascimento, 'cep', cep, 'telefone', telefone, 'email', email, 'id', id]

    pool.query(sql, data, (err,data) => {
        if(err){
            console.log(err)
            return
        }

        const clienteAlterado = data[0]

        res.redirect(`/cliente/listacliente/${id}`)
    })
})

router.post('/remover/:id', (req,res) => {
    const id = req.params.id

    const sql = `DELETE FROM clientes WHERE ?? = ? `

    const data = ['id', id]

    pool.query(sql, data, (err,data) => {
        if(err){
            console.log(err)
            return
        }

        res.redirect('/cliente/lista')
    })
})

module.exports = router