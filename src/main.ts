import app from "./server";
import dotenv from "dotenv";
// import mongoose from "mongoose";

// mongoose.connect("mongodb://localhost:27017/tu-base-de-datos", {});
// const db = mongoose.connection;

// db.on(
//   "error",
//   console.error.bind(console, "Error de conexión a la base de datos:")
// );
// db.once("open", function () {
//   console.log("Conexión exitosa a la base de datos");
// });

dotenv.config({ path: ".env" });

const port = process.env.PORT || 4000;

//levantamos el servidor en el puerto especificado
app.listen(port, () => {
  console.log(`App listening on port ${port}!`);
});
