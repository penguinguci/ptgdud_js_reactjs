import express from 'express';
import {getAllUsers, getAdminByRole} from '../controllers/userController.js';

const router = express.Router();

router.get('/', getAllUsers);
router.get('/:role', getAdminByRole);

export default router;