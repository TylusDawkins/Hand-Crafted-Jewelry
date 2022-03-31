const mongoose = require('mongoose');
const Schema  = mongoose.Schema


const Jewelry = new Schema(
    {
        name: {type: String, required: true},
        type: {type: String, required: true},
        description: {type: String, required: true},
        image: {type: String, required: true},
        colors: {type: String, required: true},
        band: {type: String, required: true},
    },

    {timestamps: true}
)

module.exports = mongoose.model('Jewlery', Jewelry)