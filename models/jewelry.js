const mongoose = require('mongoose');
const Schema  = mongoose.Schema


const Jewelry = new Schema(
    {
        id: {type: String, required: true},
        name: {type: String, required: true},
        type: {type: String, required: true},
        description: {type: String, required: true},
        image: {type: String, required: true},
        colors: {type: Array, required: true},
        band: {type: String, required: true},
    },

    {timestamps: true}
)

module.exports = mongoose.model('jewlery', Jewelry)