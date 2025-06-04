import Cliente from "../models/Cliente.js";

// Crear cliente
export const crearCliente = async (req, res) => {
  try {
    const nuevo = new Cliente(req.body);
    await nuevo.save();
    res.status(201).json(nuevo);
  } catch (error) {
    res.status(400).json({ mensaje: "Error al crear cliente", error });
  }
};

// Obtener todos
export const obtenerClientes = async (req, res) => {
  try {
    const lista = await Cliente.find();
    res.json(lista);
  } catch (error) {
    res.status(500).json({ mensaje: "Error al obtener clientes", error });
  }
};

// Obtener por ID
export const obtenerCliente = async (req, res) => {
  try {
    const item = await Cliente.findById(req.params.id);
    if (!item)
      return res.status(404).json({ mensaje: "Cliente no encontrado" });
    res.json(item);
  } catch (error) {
    res.status(500).json({ mensaje: "Error al obtener cliente", error });
  }
};

// Actualizar
export const actualizarCliente = async (req, res) => {
  try {
    const actualizado = await Cliente.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(actualizado);
  } catch (error) {
    res.status(400).json({ mensaje: "Error al actualizar cliente", error });
  }
};

// Eliminar
export const eliminarCliente = async (req, res) => {
  try {
    await Cliente.findByIdAndDelete(req.params.id);
    res.json({ mensaje: "Cliente eliminado" });
  } catch (error) {
    res.status(500).json({ mensaje: "Error al eliminar cliente", error });
  }
};
