import db from "../db/db.js";
import collections from "../enums/collections.js";
import statusCodes from "../enums/statusCodes.js";
import { ObjectId } from "mongodb";

async function listProducts(req, res) {
	try {
		console.log("GET /products");
		const products = await db.collection(collections.PRODUCTS).find().toArray();

		return res.status(statusCodes.OK).send(products);
	} catch (error) {
		console.log(error);
		return res.sendStatus(statusCodes.SERVER_ERROR);
	}
}

//Função para facilitar inserir dados no Mongo kkk
async function insertProduct(req, res) {
	try {
		const product = req.body;
		console.log("POST /products");
		await db.collection(collections.PRODUCTS).insertOne(product);

		return res.sendStatus(statusCodes.CREATED);
	} catch (error) {
		console.log(error);
		return res.sendStatus(statusCodes.SERVER_ERROR);
	}
}

async function getInfoProduct(req, res) {
	try {
		const { PRODUCT_ID } = req.params;

		const productInfo = await db
			.collection(collections.PRODUCTS)
			.findOne({ _id: ObjectId(PRODUCT_ID) });

		return res.send(productInfo);
	} catch (error) {
		console.log(error);
		return res.sendStatus(500);
	}
}

export { listProducts, insertProduct, getInfoProduct };
