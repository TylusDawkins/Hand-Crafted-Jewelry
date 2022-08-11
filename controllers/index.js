const Jewelry = require('../models/jewelry');


const getAllJewelry = async (req, res) => {
    try {
        const data = await Jewelry.find()
        return res.status(200).json({ data })
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const getItemById = async (req, res) => {
    try {
        const { id } = req.params;
        const item = await Jewelry.findById(id)
        if (item) {
            return res.status(200).json({ item });
        }
        return res.status(404).send('item with the specified ID does not exists');
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
const updateItem = async (req,res) =>{
    try{
        res.status(200).json(await Jewelry.findByIdAndUpdate(req.params.id, req.body))
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
    deleteItem,
    getItemById,
    updateItem
}
