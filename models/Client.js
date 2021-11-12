const { DataTypes } = require('sequelize')

const db = require('../db/conn')

const Client = db.define('Client', {
    name: {
        type: DataTypes.STRING,
        required: true
    },
    sex: {
        type: DataTypes.CHAR(1),
        required: true
    },
    birthday: {
        type: DataTypes.STRING,
        required: true
    },
    phone: {
        type: DataTypes.STRING,
        required: true
    },
    email: {
        type: DataTypes.STRING,
        required: true
    }
})

module.exports = Client