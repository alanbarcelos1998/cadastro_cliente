const express = require('express')
const router = express.Router()
const ClientController = require('../controllers/ClientController')

router.get('/', ClientController.createClient )
router.post('/insert', ClientController.createClientInsert)
router.get('/edit/:id', ClientController.edit)
router.post('/edit', ClientController.editPost)
router.get('/list', ClientController.list)
router.post('/remove', ClientController.remove)
router.get('/oneclient/:id', ClientController.oneClient)

module.exports = router