// bookController.ts
import { Request, Response } from 'express';
import { createBookService, getAllBooksService, getBookService } from '../services/bookService';

// Request body için interface tanımla
interface CreateBookRequest {
 name: string;
 average_rating?: string;
}

export const createBook = async (req: Request<{}, {}, CreateBookRequest>, res: Response) => {
 try {
   const bookData = req.body;
   const result = await createBookService(bookData);
   res.status(201).json({
     success: true,
     message: 'Kitap başarıyla oluşturuldu',
     data: result
   });
 } catch (error) {
   if (error instanceof Error) {
     res.status(400).json({ success: false, error: error.message });
   } else {
     res.status(400).json({ success: false, error: 'Beklenmeyen bir hata oluştu' });
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
     res.status(400).json({ success: false, error: 'Beklenmeyen bir hata oluştu' });
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
     res.status(400).json({ success: false, error: 'Beklenmeyen bir hata oluştu' });
   }
 }
};