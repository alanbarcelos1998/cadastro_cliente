const Client = require('../models/Client')
const db = require('../db/conn')

module.exports = class ClientController{
    static createClient(req, res){
        res.render('home')
    }

    static async createClientInsert(req, res){
        const client = {
            name: req.body.name,
            sex: req.body.sex,
            birthday: req.body.birthday,
            phone: req.body.phone,
            email: req.body.email
        }

        await Client.create(client)

        res.redirect('/client')
    }

    static async list(req, res){
        const client = await Client.findAll({raw: true})

        res.render('list', { client })
    }
    
    static async edit(req, res){
        const id = req.params.id

        const client = await Client.findOne({where: {id: id}, raw: true})

        res.render('editclient', { client })
    }

    static async editPost(req,res){
        const id = req.body.id

        const client = {
            name: req.body.name,
            sex: req.body.sex,
            birthday: req.body.birthday,
            phone: req.body.phone,
            email: req.body.email
        }

        await Client.update(client, {where: {id:id}})

        res.redirect('/client/list')
    }

    static async remove(req,res){
        const id = req.body.id

        await Client.destroy({where: {id: id} })

        res.redirect('/client/list')
    }

    static async oneClient(req,res){
        const id = req.params.id

        const client = await Client.findOne({where: {id: id}, raw: true})

        res.render('listOneClient', {client} )
    }
}