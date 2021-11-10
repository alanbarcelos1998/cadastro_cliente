const Client = require('../models/Client')

module.exports = class ClientController{
    static createClient(req, res){
        res.render('home')
    }

    static async createClientInsert(req, res){
        const { name,sex,birthday,phone,email } = req.body

        await Client.insert(name, sex, birthday, phone, email)

        res.redirect('/client')
    }
}