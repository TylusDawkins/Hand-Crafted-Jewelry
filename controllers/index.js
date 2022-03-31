const Jewelry = require('../models/jewelry');
const { post } = require('../routes');


const getAllJewelry = async (req, res) => {
    try {
        const data = await Jewelry.find()
        return res.status(200).json({ data })
    } catch (error) {
        return res.status(500).send(error.message);
    }
}
const createItem = async (req, res) => {
    try {
        const item = await new Jewelry(req.body)
        await item.save()
        return res.status(201).json({
            item,
        });
    } catch (error) {
        return res.status(500).json({ error: error.message })

    }
}

const deleteItem = async (req,res) =>{
    try{
        res.status(200).json(await Jewelry.findByIdAndDelete(req.params.id))
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}

module.exports = {
    getAllJewelry,
    createItem,
    deleteItem
}
