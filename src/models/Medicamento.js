import mongoose from 'mongoose';

const medicamentoSchema = new mongoose.Schema({
  nombre: String,
  descripcion: String,
  categoria: String,
  precio: Number,
  stock: Number,
  laboratorio: String,
  fecha_vencimiento: String,
  presentacion: String
});

export default mongoose.model('Medicamento', medicamentoSchema);
