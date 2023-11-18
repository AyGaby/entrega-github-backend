import express from "express";
import cors from "cors";
import RouterGit from "../routes/users.routes";

const app = express();

// Config-Middleware
app.use(cors());

//Routes
app.use(RouterGit);

export default app;
