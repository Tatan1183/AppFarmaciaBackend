// 👤 MODELO DE CLIENTE PARA 'AppFarmacia'
// Este archivo define la estructura del documento "Cliente"

import mongoose from "mongoose"; // Importa mongoose para crear el esquema

const clienteSchema = new mongoose.Schema({
  nombre: String,
  cedula: String,
  telefono: String,
  direccion: String,
  correo: String,
});

// El modelo permite interactuar con la colección "clientes" en la base de datos
export default mongoose.model("Cliente", clienteSchema);
