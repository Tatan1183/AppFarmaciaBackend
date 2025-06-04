//💰CONTROLADOR DE VENTAS PARA 'AppFarmacia'
//Este archivo contiene las funciones CRUD para la colección "Venta"

import Venta from "../models/Venta.js"; // Importa el modelo de ventas

//🟢Registrar una nueva venta
export const crearVenta = async (req, res) => {
  try {
    const nuevaVenta = new Venta(req.body); // Crea una nueva venta con los datos del cliente
    await nuevaVenta.save(); // Guarda la venta en la base de datos
    res.status(201).json(nuevaVenta); // Devuelve la venta creada
  } catch (error) {
    res.status(400).json({ mensaje: "Error al registrar la venta", error }); // Error al validar o guardar
  }
};

//📋Obtener todas las ventas
export const obtenerVentas = async (req, res) => {
  try {
    const ventas = await Venta.find(); // Busca todas las ventas registradas
    res.json(ventas); // Devuelve la lista de ventas
  } catch (error) {
    res.status(500).json({ mensaje: "Error al obtener ventas", error }); // Error del servidor
  }
};

//🔍Obtener una venta por su ID
export const obtenerVenta = async (req, res) => {
  try {
    const venta = await Venta.findById(req.params.id); // Busca una venta por ID
    if (!venta) return res.status(404).json({ mensaje: "Venta no encontrada" }); // Si no existe, responde con 404
    res.json(venta); // Devuelve la venta encontrada
  } catch (error) {
    res.status(500).json({ mensaje: "Error al obtener la venta", error }); // Error del servidor
  }
};

//✏️Actualizar una venta por ID
export const actualizarVenta = async (req, res) => {
  try {
    const ventaActualizada = await Venta.findByIdAndUpdate(
      req.params.id, // ID de la venta a actualizar
      req.body, // Nuevos datos a guardar
      { new: true } // Devuelve la venta ya actualizada
    );
    res.json(ventaActualizada); // Devuelve la venta modificada
  } catch (error) {
    res.status(400).json({ mensaje: "Error al actualizar la venta", error }); // Error al validar o actualizar
  }
};

//🗑️Eliminar una venta por ID
export const eliminarVenta = async (req, res) => {
  try {
    await Venta.findByIdAndDelete(req.params.id); // Elimina la venta
    res.json({ mensaje: "Venta eliminada correctamente" }); // Confirma la eliminación
  } catch (error) {
    res.status(500).json({ mensaje: "Error al eliminar la venta", error }); // Error del servidor
  }
};
