// 📁👤 Rutas para el manejo de clientes en la API de Farmacia
import express from "express"; // 🚂 Framework web
import {
  crearCliente,
  obtenerClientes,
  obtenerCliente,
  actualizarCliente,
  eliminarCliente,
} from "../controllers/cliente.controller.js"; // 📦 Funciones del controlador

const router = express.Router(); // 🚏 Crear una instancia de enrutador

// 📌 Ruta: Crear un nuevo cliente
router.post("/", crearCliente);

// 📌 Ruta: Obtener todos los clientes
router.get("/", obtenerClientes);

// 📌 Ruta: Obtener un cliente por su ID
router.get("/:id", obtenerCliente);

// 📌 Ruta: Actualizar un cliente por su ID
router.put("/:id", actualizarCliente);

// 📌 Ruta: Eliminar un cliente por su ID
router.delete("/:id", eliminarCliente);

export default router; // 📤 Exportar el router para usarlo en la app principal
