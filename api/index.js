import express from "express";
import mongoose from "mongoose";
import authRoutes from "./routes/auth.route.js";
import cors from "cors";
import path from "path";
import "dotenv/config";
const app = express();

app.use(cors());
app.use(express.json());
const port = process.env.PORT || 4000;
app.use("/api/auth", authRoutes);

const __dirname = path.resolve();
app.use(express.static(path.join(__dirname, "/client/dist")));
app.get("*", (req, res) => {
	res.sendFile(path.join(__dirname, "client", "dist", "index.html"));
});
mongoose
	.connect(process.env.URI)
	.then(() => {
		console.log("mongodb connected");
	})
	.catch((error) => {
		console.log(error);
	});
app.listen(port, () => {
	console.log("app running successfully");
});
