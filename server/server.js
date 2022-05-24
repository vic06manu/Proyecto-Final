import express from "express";
import dotenv from "dotenv";
import connectDatabase from './config/MongoDb.js';
import ImportData from './DataImport.js';
import productRoute from './routes/ProductRoutes.js';
import { errorHandler, notFound } from "./middleware/error.js";
import userRouter from "./routes/UserRoutes.js";

dotenv.config();
connectDatabase();
const app = express();
app.use(express.json());

//API
app.use("/api/import", ImportData);
app.use("/api/products", productRoute);
app.use("/api/users", userRouter);

//Error handling
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 1000;

app.listen(PORT,console.log(`server run en port ${PORT}`));