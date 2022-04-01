const mongoose = require('mongoose');
const Schema  = mongoose.Schema


const Subscriber = new Schema(
    {
        Email: {type: String, required: true},
    },

    {timestamps: true}
)

module.exports = mongoose.model('Subscriber', Subscriber)