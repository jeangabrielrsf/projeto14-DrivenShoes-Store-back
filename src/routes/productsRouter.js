import express from "express";
import {
	listProducts,
	insertProduct,
	getInfoProduct,
} from "../controllers/productsController.js";

const productsRouter = express.Router();
productsRouter.get("/products", listProducts);
productsRouter.post("/products", insertProduct);
productsRouter.get("/products/:PRODUCT_ID", getInfoProduct);

export default productsRouter;
