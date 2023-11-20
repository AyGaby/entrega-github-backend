import app from "./server";

//levantamos el servidor en el puerto especificado
app.listen(4000),
  () => {
    console.log("Servidor en el puerto http://localhost:4000");
  };
