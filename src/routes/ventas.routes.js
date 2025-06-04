// 💰 Rutas para el manejo de ventas en la API de Farmacia

import express from "express"; // 🚂 Framework Express para rutas HTTP

// 📦 Importación de funciones del controlador de ventas
import {
  crearVenta,
  obtenerVentas,
  obtenerVenta,
  actualizarVenta,
  eliminarVenta,
} from "../controllers/venta.controller.js";

const router = express.Router(); // 🚏 Crear instancia del enrutador de Express

// 📌 Ruta: Crear una nueva venta
router.post("/", crearVenta);

// 📌 Ruta: Obtener todas las ventas
router.get("/", obtenerVentas);

// 📌 Ruta: Obtener una venta específica por su ID
router.get("/:id", obtenerVenta);

// 📌 Ruta: Actualizar una venta por su ID
router.put("/:id", actualizarVenta);

// 📌 Ruta: Eliminar una venta por su ID
router.delete("/:id", eliminarVenta);

export default router; // 📤 Exportar el router para ser usado en la app principal
