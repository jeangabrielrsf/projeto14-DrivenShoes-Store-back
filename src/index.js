import express from "express";
import cors from "cors";
import db from "./db/db.js";

const app = express();
app.use(express.json());
app.use(cors());

app.get("/status", (req, res) => {
	console.log("GET /status...");
	res.status(200).send("Tudo OK");
});

app.get("/products", async (req, res) => {
	try {
		console.log("GET /products");
		const products = await db.collection("driven_shoes").find().toArray();

		return res.send(products);
	} catch (error) {
		console.log(error);
		return res.sendStatus(500);
	}
});

app.listen(5000, () => console.log("Listening on port 5000..."));
