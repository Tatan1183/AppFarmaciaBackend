import mongoose from 'mongoose';

const empleadoSchema = new mongoose.Schema({
  nombre: String,
  cedula: String,
  cargo: String,
  telefono: String,
  turno: String
});

export default mongoose.model('Empleado', empleadoSchema);
