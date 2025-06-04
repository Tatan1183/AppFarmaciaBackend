//🧑‍⚕️MODELO DE EMPLEADO PARA 'AppFarmacia'
//Este archivo define la estructura del documento "Empleado"

import mongoose from "mongoose"; // Importa mongoose para definir el esquema

const empleadoSchema = new mongoose.Schema({
  nombre: String,
  cedula: String,
  cargo: String,
  telefono: String,
  turno: String,
});

// Permite interactuar con la colección "empleados" en la base de datos
export default mongoose.model("Empleado", empleadoSchema);
