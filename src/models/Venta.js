import mongoose from "mongoose"; // Importa mongoose para definir el esquema

const ventaSchema = new mongoose.Schema({
  fecha: String,
  cliente: {
    nombre: String,
    cedula: String,
  },
  items: [
    {
      nombre: String,
      cantidad: Number,
      precio_unitario: Number,
    },
  ],
  total: Number,
  metodo_pago: String,
});

//Permite interactuar con la colección "Ventas" en la base de datos
export default mongoose.model("Venta", ventaSchema);
