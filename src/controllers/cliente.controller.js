//👥CONTROLADOR DE CLIENTES PARA 'AppFarmacia'
//Este archivo contiene las funciones CRUD para la colección "Cliente"

import Cliente from "../models/Cliente.js"; // Importa el modelo Cliente para interactuar con la base de datos

//🟢Crear un nuevo cliente
export const crearCliente = async (req, res) => {
  try {
    const nuevo = new Cliente(req.body); // Crea una nueva instancia con los datos recibidos
    await nuevo.save(); // Guarda el nuevo cliente en la base de datos
    res.status(201).json(nuevo); // Responde con el cliente creado
  } catch (error) {
    res.status(400).json({ mensaje: "Error al crear cliente", error }); // Error de validación o guardado
  }
};

//📋Obtener todos los clientes

export const obtenerClientes = async (req, res) => {
  try {
    const lista = await Cliente.find(); // Busca todos los clientes
    res.json(lista); // Responde con la lista completa
  } catch (error) {
    res.status(500).json({ mensaje: "Error al obtener clientes", error }); // Error de servidor
  }
};

//🔍Obtener un cliente por ID
export const obtenerCliente = async (req, res) => {
  try {
    const item = await Cliente.findById(req.params.id); // Busca cliente por ID
    if (!item)
      return res.status(404).json({ mensaje: "Cliente no encontrado" }); // Si no se encuentra, responde con error 404
    res.json(item); // Responde con los datos del cliente encontrado
  } catch (error) {
    res.status(500).json({ mensaje: "Error al obtener cliente", error }); // Error de servidor
  }
};

//✏️Actualizar un cliente por ID
export const actualizarCliente = async (req, res) => {
  try {
    const actualizado = await Cliente.findByIdAndUpdate(
      req.params.id, // ID del cliente a actualizar
      req.body, // Nuevos datos
      { new: true } // Retorna el documento actualizado
    );
    res.json(actualizado); // Responde con el cliente actualizado
  } catch (error) {
    res.status(400).json({ mensaje: "Error al actualizar cliente", error }); // Error de validación o actualización
  }
};

//🗑️Eliminar un cliente por ID
export const eliminarCliente = async (req, res) => {
  try {
    await Cliente.findByIdAndDelete(req.params.id); // Elimina el cliente
    res.json({ mensaje: "Cliente eliminado" }); // Respuesta de confirmación
  } catch (error) {
    res.status(500).json({ mensaje: "Error al eliminar cliente", error }); // Error de servidor
  }
};
