import express from 'express';
import {
  crearVenta,
  obtenerVentas,
  obtenerVenta,
  actualizarVenta,
  eliminarVenta
} from '../controllers/venta.controller.js';

const router = express.Router();

router.post('/', crearVenta);
router.get('/', obtenerVentas);
router.get('/:id', obtenerVenta);
router.put('/:id', actualizarVenta);
router.delete('/:id', eliminarVenta);

export default router;
