//importamos la libreria de express
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import RouterGit from "../routes/users.routes";

//creamos la insancia express
const app = express();

const allowedOrigins = ["http://localhost:5173"];

const options: cors.CorsOptions = {
  origin: allowedOrigins,
};

// Config-Middleware
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors(options));

//Ruta de prueba
app.get("/", (req, res) => {
  res.send("Hello World!");
});
//Routes
app.use(RouterGit);

export default app;
