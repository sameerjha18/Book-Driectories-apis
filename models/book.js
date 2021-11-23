const mongoose = require('mongoose');
const schema = mongoose.Schema;

//create student schema $ model
const BookSchema = new schema({
    name: {
        type: String,
        required: [true, 'Name field is required']
    },
    author: {
        type: String,
        required: [true, 'Author field is required']
    },
    publisher: {
        type: String,
        required: [true, 'Publisher field is required']
    },
    price: {
        type: String,
        required: [true, 'Price field is required']
    },
    instock: {
        type: Boolean,
        default: true
    }
});

module.exports = mongoose.model('Books',BookSchema);