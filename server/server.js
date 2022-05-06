import express from "express";
import products from "./data/Products.js";

const app = express();

// Carga de Productos
app.get("/api/products", (req, res) =>{
    res.json(products);
});

// Cragar de Productos por ID
app.get("/api/products/:id", (req, res) =>{
    const product = products.find((p) => p._id === req.params.id);
    res.json(product);
});

app.get("/", (req, res) =>{
    res.send("Api run");
});
app.listen(5000,console.log("server run port 5000"));
