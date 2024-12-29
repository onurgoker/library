// bookController.ts
import { Request, Response } from 'express';
import { createBookService, getAllBooksService, getBookService } from '../services/bookService';

// Request body için interface tanımla
interface CreateBookRequest {
 name: string;
}

export const createBook = async (req: Request<{}, {}, CreateBookRequest>, res: Response) => {
 try {
   const bookData = req.body;
   const result = await createBookService(bookData);
   res.status(201).json({
     success: true,
     message: 'Book has been created successfully!',
     data: result
   });
 } catch (error) {
   if (error instanceof Error) {
     res.status(400).json({ success: false, error: error.message });
   } else {
     res.status(400).json({ success: false, error: 'Unexpected error occured!' });
   }
 }
};

export const getBook = async (req: Request, res: Response) => {

 try {
   const bookId = req.params.id || req.query.id as string;

   const result = await getBookService(bookId);
   res.status(200).json({
     success: true,
     data: result
   });
 } catch (error) {
   if (error instanceof Error) {
     res.status(404).json({ success: false, error: error.message });
   } else {
     res.status(400).json({ success: false, error: 'Unexpected error occured!' });
   }
 }
};

export const getAllBooks = async (req: Request, res: Response) => {
 try {
   const result = await getAllBooksService();
   res.status(200).json({
     success: true,
     data: result
   });
 } catch (error) {
   if (error instanceof Error) {
     res.status(400).json({ success: false, error: error.message });
   } else {
     res.status(400).json({ success: false, error: 'Unexpected error occured!' });
   }
 }
};