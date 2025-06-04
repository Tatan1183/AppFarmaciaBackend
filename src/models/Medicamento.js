//💊MODELO DE MEDICAMENTOS PARA 'AppFarmacia'
//Este archivo define la estructura del documento "Medicamentos"

import mongoose from "mongoose"; // Importa mongoose para definir el esquema

const medicamentoSchema = new mongoose.Schema({
  nombre: String,
  descripcion: String,
  categoria: String,
  precio: Number,
  stock: Number,
  laboratorio: String,
  fecha_vencimiento: String,
  presentacion: String,
});

// Permite interactuar con la colección "Medicamentos" en la base de datos
export default mongoose.model("Medicamento", medicamentoSchema);
