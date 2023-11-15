const mongoose = require('mongoose');


class Cart {

    // function to add items in the cart
    static addToCart = async (req, res) => {
        const { id } = req.body;
        try {
            const product_collection = mongoose.connection.db.collection('products');
            const isItemExist = await product_collection.findOne({ id });

            // checking if item exists in product list
            if (isItemExist) {
                const collection = mongoose.connection.db.collection('cartItems');
                const isItemInCart = await collection.findOne({ id });

                // checking if item exists in cart
                if (!isItemInCart) {
                    await collection.insertOne(isItemExist);
                    res.status(200).json({ message: 'Item added successfully' });
                }
                else {
                    res.status(200).json({ message: 'Item already in cart' });
                }
            }
            else {
                res.status(404).json({ message: 'Item not available' });
            }
        } catch (error) {
            res.send({ message: 'Failed to add to cart' });
        }
    }

    // function to show all the item present in the cart
    static showCart = async (req, res) => {
        try {
            const collection = mongoose.connection.db.collection('cartItems');
            const data = await collection.find({}).toArray();
            res.status(200).json(data);
        } catch (error) {
            res.status(404).json({ 'message': 'Failed to fetch data' });
        }
    }

    // function to delete items from the cart
    static deleteFromCart = async (req, res) => {
        const { id } = req.body;
        try {
            const collection = mongoose.connection.db.collection('cartItems');
            const isItemFound = await collection.findOne({ id });
            if (isItemFound) {
                await collection.deleteOne({ id });
                res.status(200).json({ message: 'Item deleted from the cart' });
            }
            else {
                res.status(404).json({ message: 'Item not found in the cart' });
            }
        } catch (error) {
            res.status(500).json({ message: 'Failed to delete from the cart' });
        }
    }
}

module.exports = Cart;