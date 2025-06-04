import express from 'express';
import {
  crearMedicamento,
  obtenerMedicamentos,
  obtenerMedicamento,
  actualizarMedicamento,
  eliminarMedicamento
} from '../controllers/medicamento.controller.js';

const router = express.Router();

router.post('/', crearMedicamento);
router.get('/', obtenerMedicamentos);
router.get('/:id', obtenerMedicamento);
router.put('/:id', actualizarMedicamento);
router.delete('/:id', eliminarMedicamento);

export default router;
