import express from "express";
import mongoose from "mongoose";
import authRoutes from "./routes/auth.route.js";
import cors from "cors";
import "dotenv/config";
const app = express();

const corsOptions = { origin: "https://practiceauth.onrender.com" };
app.use(cors(corsOptions));
app.use(express.json());
const port = process.env.PORT || 4000;
app.use("/api/auth", authRoutes);

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
