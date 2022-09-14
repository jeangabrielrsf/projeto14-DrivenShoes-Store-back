import express from "express";
import productsRouter from "./productsRouter.js";

const router = express.Router();
router.use(productsRouter);

export default router;
