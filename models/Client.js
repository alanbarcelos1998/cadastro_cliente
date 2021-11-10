const db = require('../db/conn')

module.exports = class Querys{
    static async insert(name, sex, birthday, phone, email){

        const sql = `INSERT INTO clientes (??, ??, ??, ??, ??) VALUES (?,?,?,?,?)`
        const data = ['name', 'sex','birthday','phone', 'email' ,name,sex,birthday,phone,email]

        db.query(sql, data, (err) => {
            if (err){
                console.log(err)
                return
            }

            return
        })
    }
}