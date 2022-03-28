const mongoose = require('mongoose');
const Schema  = mongoose.Schema


const Dino = new Schema(
    {
        id_number: {type: String, required: true},
        name: {type: String, required: true},
        description: {type: String, required: true},
        image: {type: String, required: true},
        danger_rating: {type: String, required: true},
        people_eaten: {type: String, required: true},
    },

    {timestamps: true}
)

module.exports = mongoose.model('dinos', Dino)