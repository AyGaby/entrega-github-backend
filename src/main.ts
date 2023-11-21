import app from "./server";
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

//levantamos el servidor en el puerto especificado
app.listen(4000),
  () => {
    console.log("Servidor en el puerto http://localhost:4000");
  };
