import express from 'express';
import {getAllUsers, getAdminByRole, addUser, updateUser} from '../controllers/userController.js';

const router = express.Router();

router.get('/', getAllUsers);
router.get('/:role', getAdminByRole);
router.post('/', addUser);
router.put('/:id', updateUser);

export default router;