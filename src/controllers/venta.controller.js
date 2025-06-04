import Venta from '../models/Venta.js';

// Crear venta
export const crearVenta = async (req, res) => {
  try {
    const nuevaVenta = new Venta(req.body);
    await nuevaVenta.save();
    res.status(201).json(nuevaVenta);
  } catch (error) {
    res.status(400).json({ mensaje: 'Error al registrar la venta', error });
  }
};

// Obtener todas las ventas
export const obtenerVentas = async (req, res) => {
  try {
    const ventas = await Venta.find();
    res.json(ventas);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al obtener ventas', error });
  }
};

// Obtener una venta por ID
export const obtenerVenta = async (req, res) => {
  try {
    const venta = await Venta.findById(req.params.id);
    if (!venta) return res.status(404).json({ mensaje: 'Venta no encontrada' });
    res.json(venta);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al obtener la venta', error });
  }
};

// Actualizar una venta
export const actualizarVenta = async (req, res) => {
  try {
    const ventaActualizada = await Venta.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(ventaActualizada);
  } catch (error) {
    res.status(400).json({ mensaje: 'Error al actualizar la venta', error });
  }
};

// Eliminar una venta
export const eliminarVenta = async (req, res) => {
  try {
    await Venta.findByIdAndDelete(req.params.id);
    res.json({ mensaje: 'Venta eliminada correctamente' });
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al eliminar la venta', error });
  }
};
