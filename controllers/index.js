const Jewelry = require('../models/jewelry');


const getAllJewelry = async (req, res) => {
    try {
        const data = await Jewelry.find()
        return res.status(200).json({ data })
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

module.exports = {
    getAllJewelry
}