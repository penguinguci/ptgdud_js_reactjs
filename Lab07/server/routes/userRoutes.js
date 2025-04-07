import express from 'express';
import {getAllUsers, getAdminByRole, addUser} from '../controllers/userController.js';

const router = express.Router();

router.get('/', getAllUsers);
router.get('/:role', getAdminByRole);
router.post('/', addUser);

export default router;