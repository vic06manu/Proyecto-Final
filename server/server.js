import express from "express";
import dotenv from "dotenv";
import connectDatabase from './config/MongoDb.js';
import ImportData from './DataImport.js';
import productRoute from './routes/ProductRoutes.js';
import { errorHandler, notFound } from "./middleware/error.js";

dotenv.config();
connectDatabase();
const app = express();

//API
app.use("/api/import", ImportData);
app.use("/api/products", productRoute);

//Error handling
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 1000;

app.listen(PORT,console.log(`server run en port ${PORT}`));