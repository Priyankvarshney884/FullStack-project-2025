const express = require('express');
const mongoose = require('mongoose');

const app = express();
const port = 3000; // Define the port on which the server will run
const hostname = 'localhost'; // Define the hostname on which the server will run

mongoose.connect("mongodb://127.0.0.1:27017/Priyank", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("✅ Connected to MongoDB"))
.catch((err) => console.error("❌ MongoDB connection error:", err));
// Product Schema 
 const productSchema = mongoose.Schema({
    name:String,
    price:Number,
    description:String,
    category:String,
 })

 // Product Model
    const Product = mongoose.model('Product', productSchema);

    //get request to fetch all products
    app.get('/products', async (req, res) => {
        try {
            const products = await Product.find();
            res.status(200).json(products);
        } catch (error) {
            res.status(500).json({ message: 'Error fetching products', error });
        }
    });

    //poast request to add a new product
    app.post('/products', async (req, res) => {
        try {
            const newProduct = new Product(req.body);
            await newProduct.save();
            res.status(201).json(newProduct);
        } catch (error) {
            res.status(500).json({ message: 'Error adding product', error });
        }
    });

    // Start the server after successful DB connection
    app.listen(port, hostname, () => {
        console.log(`Server running at http://${hostname}:${port}/`);
    });