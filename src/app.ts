/** @format */
import { configDotenv } from "dotenv";
import express from "express";

configDotenv({
	path: [".env.local", ".env"],
});
const app = express();
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Running app at ${PORT}`));
