const mongoose = require('mongoose');
const finalOrder = require('../models/ordersModel');


class Order {

    static FinalOrder = async (req, res) => {
        const { orderId } = req.body;
        try {
            const cartCollection = mongoose.connection.db.collection('cartItems');
            const allItems = await cartCollection.find({}).toArray();

            // check whether there is items in my cart or not
            if (allItems.length > 0) {
                await cartCollection.deleteMany();
                const myPurchase = new finalOrder({ orderId, 'order':allItems });
                await myPurchase.save();
                res.status(200).json({ message: "Order placed successfully" });
            }
            else {
                res.status(200).json({ message: 'No item to purchase' });
            }
        }
        catch (err) {
            res.status(400).json({ error: 'Failed to purchase item' });
        }
    }

    static OrderHistory = async (req, res) => {
        try {
            const allItems = await finalOrder.find({});
            res.status(200).json(allItems);
        } catch (error) {
            res.status(400).json({ error: "Error in fetching data" });
        }
    }

}

module.exports = Order;