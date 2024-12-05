import express from 'express';
import { salvarPerfil } from '../controllers/perfilController.js';

const router = express.Router();

router.post('/perfil', salvarPerfil);

export default router;
