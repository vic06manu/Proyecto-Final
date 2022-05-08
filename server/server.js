import express from "express";
import dotenv from "dotenv";
import connectDatabase from './config/MongoDb.js';
import ImportData from './DataImport.js';
import productRoute from './routes/ProductRoutes.js';

dotenv.config();
connectDatabase();
const app = express();

/*
 // Carga de Productos
app.get("/api/products", (req, res) =>{
    res.json(products);
});

// Cragar de Productos por ID
app.get("/api/products/:id", (req, res) =>{
    const product = products.find((p) => p._id === req.params.id);
    res.json(product);
}); */

//API
app.use("/api/import", ImportData);
app.use("/api/products", productRoute);

app.get("/", (req, res) =>{
    res.send("Api run");
});

const PORT = process.env.PORT || 1000;

app.listen(PORT,console.log(`server run en port ${PORT}`));