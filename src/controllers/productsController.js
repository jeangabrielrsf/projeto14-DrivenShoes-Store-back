import db from "../db/db.js";
import collections from "../enums/collections.js";
import statusCodes from "../enums/statusCodes.js";

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

export { listProducts, insertProduct };
