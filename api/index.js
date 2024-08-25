import express from "express";
import mongoose from "mongoose";
import authRoutes from "./routes/auth.route.js";
import dotenv from "dotenv";
const app = express();

app.use(dotenv.config());
app.use(express.json());
const port = process.env.PORT || 8000;
app.use("/api/auth", authRoutes);

mongoose
	.connect(
		"mongodb+srv://rohit:rohitAuthPractice1@cluster0.5gxr6.mongodb.net/practiceAuth?retryWrites=true&w=majority&appName=Cluster0"
	)
	.then(() => {
		console.log("mongodb connected");
	})
	.catch((error) => {
		console.log(error);
	});
app.listen(port, () => {
	console.log("app running successfully");
});
