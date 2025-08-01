import express from "express";

import { PORT } from "./config/env.js";

import authRouter from './routes/auth.routes.js';
import userRouter from './routes/user.routes.js';
import subscriptionRouter from "./routes/subscription.routes.js";
import connectToDatabse from "./database/mongodb.js";


const app = express();

app.use('/api/v1/auth', authRouter);
app.use('/api/v1/users', userRouter);
app.use('/api/v1/subscriptions', subscriptionRouter);

app.get("/", (_, res) => {
    res.send("Welcome to the Subscription tracker API");
});

app.listen(PORT, async () => {
    console.log(`Subscription tracker API is running on http://localhost:${PORT}`);
    connectToDatabse();
});

export default app;
