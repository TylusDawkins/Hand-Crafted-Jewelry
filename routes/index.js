const { Router } = require('express');
const controllers = require('../controllers')
const router = Router();

router.get('/', (req, res) => res.send("Welcome to Jordan's jewelry DB"))

router.get('/jewelry', controllers.getAllJewelry)

module.exports = router;