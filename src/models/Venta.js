import mongoose from 'mongoose';

const ventaSchema = new mongoose.Schema({
  fecha: String,
  cliente: {
    nombre: String,
    cedula: String
  },
  items: [
    {
      nombre: String,
      cantidad: Number,
      precio_unitario: Number
    }
  ],
  total: Number,
  metodo_pago: String
});

export default mongoose.model('Venta', ventaSchema);
