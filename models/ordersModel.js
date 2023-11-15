const mongoose = require('mongoose');

const OrderedProductSchema = mongoose.Schema({
    orderId:{
        type:Number,
        required:true,
        unique:true
    },
    order:{
        type:Array,
        required:true,
        default:null,
    }
});

module.exports = mongoose.model('orderedProduct', OrderedProductSchema);