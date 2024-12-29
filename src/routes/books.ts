import express from 'express';
import { validateRequest } from '../middlewares/validateRequest';
import { createBookSchema, getBookSchema, getBooksSchema } from '../validators/bookValidator';
import { createBook, getAllBooks, getBook } from '../controllers/bookController';

const router = express.Router();

// Kitap detayını almak için GET endpoint'i
router.get(
  '/:id',
  validateRequest({ params: getBookSchema }), // params doğrulaması
  getBook
);

// Tüm kitapları listelemek için GET endpoint'i
router.get(
  '/',
  validateRequest({ params: getBooksSchema }), // params doğrulaması
  getAllBooks
);

// Yeni kitap oluşturmak için POST endpoint'i
router.post(
  '/',
  validateRequest({ body: createBookSchema }), // body doğrulaması
  createBook
);

export default router;