import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import userRoutes from "./routes/user.route.js";
import authRoutes from "./routes/auth.route.js";
import postRoutes from "./routes/post.route.js";

dotenv.config();

mongoose
	.connect(process.env.MONGO)
	.then(() => console.log("Connected to database"))
	.catch((error) => console.log("Error connecting to database ", error));

const app = express();

app.use(express.json());
app.use(cookieParser());

app.listen(3001, () => {
	console.log("Server is running on port 3001!");
});

app.use("/api/user", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/post", postRoutes);

app.use((err, req, res, next) => {
	const statusCode = err.statusCode || 500;
	const message = err.message || "Internal Server Error";

	res.status(statusCode).json({
		success: false,
		statusCode,
		message,
	});
});
