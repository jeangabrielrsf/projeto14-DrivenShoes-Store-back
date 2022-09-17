import express from "express";
import cors from "cors";
import router from "./routes/index.js";

const app = express();
app.use(express.json());
app.use(cors());
app.use(router);

app.get("/status", (req, res) => {
	console.log("GET /status...");
	res.status(statusCodes.OK).send("Tudo OK");
});

app.listen(5000, () => console.log("Listening on port 5000..."));
