import mongoose from 'mongoose';

const clienteSchema = new mongoose.Schema({
  nombre: String,
  cedula: String,
  telefono: String,
  direccion: String,
  correo: String
});

export default mongoose.model('Cliente', clienteSchema);
