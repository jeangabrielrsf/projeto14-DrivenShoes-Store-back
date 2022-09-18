import express from "express";
import {
	listProducts,
	insertProduct,
} from "../controllers/productsController.js";

const productsRouter = express.Router();
productsRouter.get("/products", listProducts);
productsRouter.post("/products", insertProduct);

export default productsRouter;
