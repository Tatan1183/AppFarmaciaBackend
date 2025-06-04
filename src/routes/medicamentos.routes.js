// 💊 Rutas para el manejo de medicamentos en la API de Farmacia

import express from "express"; // 🚂 Framework para manejar rutas HTTP

// 📦 Importación de funciones del controlador de medicamentos
import {
  crearMedicamento, // ➕ Crear un nuevo medicamento
  obtenerMedicamentos, // 📄 Obtener todos los medicamentos
  obtenerMedicamento, // 🔍 Obtener un medicamento por ID
  actualizarMedicamento, // ✏️ Actualizar un medicamento por ID
  eliminarMedicamento, // 🗑️ Eliminar un medicamento por ID
} from "../controllers/medicamento.controller.js";

const router = express.Router(); // 🚏 Crear una instancia de enrutador

// 📌 Ruta: Crear un nuevo medicamento
router.post("/", crearMedicamento);

// 📌 Ruta: Obtener todos los medicamentos
router.get("/", obtenerMedicamentos);

// 📌 Ruta: Obtener un medicamento específico por su ID
router.get("/:id", obtenerMedicamento);

// 📌 Ruta: Actualizar un medicamento por su ID
router.put("/:id", actualizarMedicamento);

// 📌 Ruta: Eliminar un medicamento por su ID
router.delete("/:id", eliminarMedicamento);

export default router; // 📤 Exportar el router para ser usado en la app principal
