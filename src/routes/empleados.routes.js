// 🧑‍⚕️📁 Rutas para el manejo de empleados en la API de Farmacia

import express from "express"; // 🚂 Framework Express para crear rutas

// 📦 Importación de funciones del controlador de empleados
import {
  crearEmpleado,
  obtenerEmpleados,
  obtenerEmpleado,
  actualizarEmpleado,
  eliminarEmpleado,
} from "../controllers/empleado.controller.js";

const router = express.Router(); // 🚏 Crear una instancia del enrutador

// 📌 Ruta: Crear un nuevo empleado
router.post("/", crearEmpleado);

// 📌 Ruta: Obtener todos los empleados
router.get("/", obtenerEmpleados);

// 📌 Ruta: Obtener un empleado específico por su ID
router.get("/:id", obtenerEmpleado);

// 📌 Ruta: Actualizar un empleado por su ID
router.put("/:id", actualizarEmpleado);

// 📌 Ruta: Eliminar un empleado por su ID
router.delete("/:id", eliminarEmpleado);

export default router; // 📤 Exportar el router para usarlo en la aplicación principal