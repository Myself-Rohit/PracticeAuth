import express from "express";
import mongoose from "mongoose";
import authRoutes from "./routes/auth.route.js";

const app = express();

app.use(express.json());
const PORT = 8000;
app.use("/api/auth", authRoutes);

mongoose
	.connect("mongodb://localhost:27017/practiceauth")
	.then(() => {
		console.log("mongodb connected");
	})
	.catch((error) => {
		console.log(error);
	});
app.listen(PORT, () => {
	console.log("app running successfully");
});
