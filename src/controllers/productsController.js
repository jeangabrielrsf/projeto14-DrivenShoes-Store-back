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

export { listProducts };
