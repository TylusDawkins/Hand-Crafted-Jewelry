const { Router } = require('express');
const controllers = require('../controllers')
const router = Router();

router.get('/', (req, res) => res.send("Welcome to Jordan's Jewelry DB"))

router.get('/items', controllers.getAllJewelry)

router.get('/shop/:id', controllers.getItemById)

router.post('/items/add/', controllers.createItem)

router.delete('/items/:id', controllers.deleteItem)

module.exports = router;