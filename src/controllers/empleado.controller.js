//👨‍⚕️CONTROLADOR DE EMPLEADOS PARA 'AppFarmacia'
//Este archivo contiene las funciones CRUD para la colección "Empleado"

import Empleado from "../models/Empleado.js"; // Importa el modelo Empleado para interactuar con la base de datos

//🟢Crear un nuevo empleado

export const crearEmpleado = async (req, res) => {
  try {
    const nuevo = new Empleado(req.body); // Crea un nuevo objeto Empleado con los datos del cuerpo de la solicitud
    await nuevo.save(); // Guarda el nuevo empleado en la base de datos
    res.status(201).json(nuevo); // Responde con el empleado creado
  } catch (error) {
    res.status(400).json({ mensaje: "Error al crear empleado", error }); // Error al guardar los datos
  }
};

//📋Obtener todos los empleados

export const obtenerEmpleados = async (req, res) => {
  try {
    const lista = await Empleado.find(); // Obtiene todos los empleados registrados
    res.json(lista); // Responde con la lista completa
  } catch (error) {
    res.status(500).json({ mensaje: "Error al obtener empleados", error }); // Error del servidor
  }
};

//🔍Obtener un empleado por ID
export const obtenerEmpleado = async (req, res) => {
  try {
    const item = await Empleado.findById(req.params.id); // Busca un empleado por su ID
    if (!item)
      return res.status(404).json({ mensaje: "Empleado no encontrado" }); // Si no lo encuentra, responde con 404
    res.json(item); // Responde con los datos del empleado encontrado
  } catch (error) {
    res.status(500).json({ mensaje: "Error al obtener empleado", error }); // Error del servidor
  }
};

//✏️Actualizar un empleado por ID
export const actualizarEmpleado = async (req, res) => {
  try {
    const actualizado = await Empleado.findByIdAndUpdate(
      req.params.id, // ID del empleado a actualizar
      req.body, // Nuevos datos
      { new: true } // Retorna el documento ya actualizado
    );
    res.json(actualizado); // Responde con el empleado actualizado
  } catch (error) {
    res.status(400).json({ mensaje: "Error al actualizar empleado", error }); // Error al validar o actualizar
  }
};

//🗑️Eliminar un empleado por ID
export const eliminarEmpleado = async (req, res) => {
  try {
    await Empleado.findByIdAndDelete(req.params.id); // Elimina el empleado por su ID
    res.json({ mensaje: "Empleado eliminado" }); // Confirma la eliminación
  } catch (error) {
    res.status(500).json({ mensaje: "Error al eliminar empleado", error }); // Error del servidor
  }
};
