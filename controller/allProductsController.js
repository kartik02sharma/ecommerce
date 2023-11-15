const mongoose = require('mongoose');

class Products {

    // function to show all available products
    static showAllProducts = async (req, res) => {
        try {
            const collection = mongoose.connection.db.collection('products');
            const data = await collection.find({}).toArray()
            res.status(200).json(data);
        }
        catch (err) {
            res.status(404).json({ 'message': 'Failed to fetch data' });
        }
    }
    
}

module.exports = Products;