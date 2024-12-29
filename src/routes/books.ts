import express from 'express';
import { validateRequest } from '../middlewares/validateRequest';
import { createBookSchema, getBookSchema, getBooksSchema } from '../validators/bookValidator';
import { createBook, getAllBooks, getBook } from '../controllers/bookController';

const router = express.Router();

router.get('/:id', validateRequest(getBookSchema, 'params'), getBook);
router.get('/', validateRequest(getBooksSchema, 'params'), getAllBooks);
router.post('/', validateRequest(createBookSchema, 'body'), createBook);

export default router;