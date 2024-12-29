import express from 'express';
import { borrowBook, returnBook } from '../controllers/borrowController';
import { 
  borrowParamsSchema, 
  borrowBookSchema, 
  returnParamsSchema, 
  returnBodySchema 
} from '../validators/borrowValidators';
import { validateRequest } from '../middlewares/validateRequest';

const router = express.Router();

// Kitap ödünç alma endpoint'i
router.post(
  '/users/:userId/borrow/:bookId',
  validateRequest({ params: borrowParamsSchema, body: borrowBookSchema }),
  borrowBook
);

// Kitap iade etme endpoint'i
router.post(
  '/users/:userId/return/:bookId',
  validateRequest({ params: returnParamsSchema, body: returnBodySchema }),
  returnBook
);

export default router;