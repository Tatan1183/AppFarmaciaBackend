import Empleado from '../models/Empleado.js';

// Crear empleado
export const crearEmpleado = async (req, res) => {
  try {
    const nuevo = new Empleado(req.body);
    await nuevo.save();
    res.status(201).json(nuevo);
  } catch (error) {
    res.status(400).json({ mensaje: 'Error al crear empleado', error });
  }
};

// Obtener todos
export const obtenerEmpleados = async (req, res) => {
  try {
    const lista = await Empleado.find();
    res.json(lista);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al obtener empleados', error });
  }
};

// Obtener por ID
export const obtenerEmpleado = async (req, res) => {
  try {
    const item = await Empleado.findById(req.params.id);
    if (!item) return res.status(404).json({ mensaje: 'Empleado no encontrado' });
    res.json(item);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al obtener empleado', error });
  }
};

// Actualizar
export const actualizarEmpleado = async (req, res) => {
  try {
    const actualizado = await Empleado.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(actualizado);
  } catch (error) {
    res.status(400).json({ mensaje: 'Error al actualizar empleado', error });
  }
};

// Eliminar
export const eliminarEmpleado = async (req, res) => {
  try {
    await Empleado.findByIdAndDelete(req.params.id);
    res.json({ mensaje: 'Empleado eliminado' });
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al eliminar empleado', error });
  }
};
