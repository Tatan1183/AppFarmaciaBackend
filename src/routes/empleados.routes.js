import express from 'express';
import {
  crearEmpleado,
  obtenerEmpleados,
  obtenerEmpleado,
  actualizarEmpleado,
  eliminarEmpleado
} from '../controllers/empleado.controller.js';

const router = express.Router();

router.post('/', crearEmpleado);
router.get('/', obtenerEmpleados);
router.get('/:id', obtenerEmpleado);
router.put('/:id', actualizarEmpleado);
router.delete('/:id', eliminarEmpleado);

export default router;
