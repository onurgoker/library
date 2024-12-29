import express from 'express';
import { borrowBook } from '../controllers/borrowController';
import { borrowBookSchema } from '../validators/borrowValidators';
import { validateRequest } from '../middlewares/validateRequest';

const router = express.Router();

// Kitap ödünç alma endpoint'i
router.post('/', validateRequest(borrowBookSchema), borrowBook);

export default router;