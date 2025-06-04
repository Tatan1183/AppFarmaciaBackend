import Medicamento from '../models/Medicamento.js';

// Crear medicamento
export const crearMedicamento = async (req, res) => {
  try {
    const nuevo = new Medicamento(req.body);
    await nuevo.save();
    res.status(201).json(nuevo);
  } catch (error) {
    res.status(400).json({ mensaje: 'Error al crear medicamento', error });
  }
};

// Obtener todos
export const obtenerMedicamentos = async (req, res) => {
  try {
    const lista = await Medicamento.find();
    res.json(lista);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al obtener medicamentos', error });
  }
};

// Obtener por ID
export const obtenerMedicamento = async (req, res) => {
  try {
    const item = await Medicamento.findById(req.params.id);
    if (!item) return res.status(404).json({ mensaje: 'No encontrado' });
    res.json(item);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al obtener medicamento', error });
  }
};

// Actualizar
export const actualizarMedicamento = async (req, res) => {
  try {
    const actualizado = await Medicamento.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(actualizado);
  } catch (error) {
    res.status(400).json({ mensaje: 'Error al actualizar medicamento', error });
  }
};

// Eliminar
export const eliminarMedicamento = async (req, res) => {
  try {
    await Medicamento.findByIdAndDelete(req.params.id);
    res.json({ mensaje: 'Medicamento eliminado' });
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al eliminar medicamento', error });
  }
};
