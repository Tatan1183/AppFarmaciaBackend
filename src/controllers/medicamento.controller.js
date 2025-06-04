//💊CONTROLADOR DE MEDICAMENTOS PARA 'AppFarmacia'
//Este archivo contiene las funciones CRUD para la colección "Medicamento"

import Medicamento from "../models/Medicamento.js"; // Importa el modelo Medicamento

//🟢Crear un nuevo medicamento
export const crearMedicamento = async (req, res) => {
  try {
    const nuevo = new Medicamento(req.body); // Crea una instancia del modelo con los datos recibidos
    await nuevo.save(); // Guarda el nuevo medicamento en la base de datos
    res.status(201).json(nuevo); // Devuelve el objeto creado
  } catch (error) {
    res.status(400).json({ mensaje: "Error al crear medicamento", error }); // Error al validar o guardar
  }
};

//📋Obtener todos los medicamentos
export const obtenerMedicamentos = async (req, res) => {
  try {
    const lista = await Medicamento.find(); // Busca todos los documentos de la colección Medicamento
    res.json(lista); // Devuelve la lista
  } catch (error) {
    res.status(500).json({ mensaje: "Error al obtener medicamentos", error }); // Error del servidor
  }
};

//🔍Obtener un medicamento por ID
export const obtenerMedicamento = async (req, res) => {
  try {
    const item = await Medicamento.findById(req.params.id); // Busca medicamento por ID
    if (!item) return res.status(404).json({ mensaje: "No encontrado" }); // Si no lo encuentra, responde con 404
    res.json(item); // Devuelve el medicamento encontrado
  } catch (error) {
    res.status(500).json({ mensaje: "Error al obtener medicamento", error }); // Error del servidor
  }
};

//✏️Actualizar un medicamento por ID
export const actualizarMedicamento = async (req, res) => {
  try {
    const actualizado = await Medicamento.findByIdAndUpdate(
      req.params.id, // ID del medicamento a actualizar
      req.body, // Nuevos datos a guardar
      { new: true } // Devuelve el objeto actualizado
    );
    res.json(actualizado); // Devuelve el medicamento actualizado
  } catch (error) {
    res.status(400).json({ mensaje: "Error al actualizar medicamento", error }); // Error al validar o actualizar
  }
};

//🗑️Eliminar un medicamento por ID
export const eliminarMedicamento = async (req, res) => {
  try {
    await Medicamento.findByIdAndDelete(req.params.id); // Elimina el medicamento
    res.json({ mensaje: "Medicamento eliminado" }); // Confirmación de eliminación
  } catch (error) {
    res.status(500).json({ mensaje: "Error al eliminar medicamento", error }); // Error del servidor
  }
};
