import express from 'express';
import { createUserSchema, getUserSchema, getUsersSchema } from '../validators/userValidator';
import { validateRequest } from '../middlewares/validateRequest';
import { createUser, getAllUsers, getUser } from '../controllers/userController';

const router = express.Router();

router.get('/:id', validateRequest(getUserSchema, 'params'), getUser);
router.get('/', validateRequest(getUsersSchema, 'params'), getAllUsers);
router.post('/', validateRequest(createUserSchema, 'body'), createUser);

export default router;