import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

mongoose
	.connect(process.env.MONGO)
	.then(() => console.log("Connected to database"))
	.catch((error) => console.log("Error connecting to database ", error));

const app = express();

app.listen(3001, () => {
	console.log("Server is running on port 3000!");
});
