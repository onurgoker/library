import express from 'express';
import { 
  createUserSchema, 
  getUserSchema, 
  getUsersSchema 
} from '../validators/userValidator';

import { validateRequest } from '../middlewares/validateRequest';
import { 
  createUser, 
  getAllUsers, 
  getUser 
} from '../controllers/userController';

import { 
  borrowBookSchema, 
  borrowParamsSchema, 
  returnParamsSchema, 
  returnBodySchema 
} from '../validators/borrowValidators';

import { 
  borrowBook, 
  returnBook 
} from '../controllers/borrowController';

const router = express.Router();

// Kullanıcıları getirme
router.get('/:id', validateRequest({ params: getUserSchema }), getUser);
router.get('/', validateRequest({ params: getUsersSchema }), getAllUsers);

// Kullanıcı oluşturma
router.post('/', validateRequest({ body: createUserSchema }), createUser);

// Kitap ödünç alma
router.post(
  '/:userId/borrow/:bookId',
  validateRequest({ params: borrowParamsSchema, body: borrowBookSchema }),
  borrowBook
);

// Kitap iade etme
router.post(
  '/:userId/return/:bookId',
  validateRequest({ params: returnParamsSchema, body: returnBodySchema }),
  returnBook
);

export default router;