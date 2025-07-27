import express from "express";

import { authRouter } from './routes/auth.routes';
import { PORT } from "./config/env.js";
const app = express();

app.get("/", (_, res) => {
    res.send("Welcome to the Subscription tracker API");
});

app.listen(PORT, () => {
    console.log(`Subscription tracker API is running on http://localhost:${PORT}`);
});

export default app;
