// modules
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const userRouter = require('./routes/userRoute');
const productRouter = require('./routes/productRoute');
const finalOrderRouter = require('./routes/orderedProductRoute');
const cors = require('cors');
const app = express();


app.use(cors());

// middleware
app.use(express.json());

// database connection
const dbURI = process.env.MONGODB;
mongoose.connect(dbURI)
    .then((accepted) => {
        const port = process.env.PORT || 5000;
        app.listen(port, () => {
            console.log(`Server is listening on port http://localhost:${port}/`);
        });
        console.log(`Database connected successfully`);
    })
    .catch((rejected) => {
        console.log("Failed to connect to database");
    });

// route
app.use(userRouter);
app.use(productRouter);
app.use(finalOrderRouter);

app.get('*', (req, res) => {
    res.status(404).json({ error: "Page not found" });
});

app.post('*', (req, res) => {
    res.status(404).json({ error: "Page not found" });
});
