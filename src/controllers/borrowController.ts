import { Request, Response } from 'express';
import { borrowBookService, returnBookService } from '../services/borrowService';

export const borrowBook = async (req: Request, res: Response) => {
  try {
    const { userId, bookId } = req.params; // İstekten kullanıcı ve kitap ID'sini al
    const result = await borrowBookService(userId, bookId); // Service katmanını çağır
    res.status(200).json({ message: 'Book has been borrowed successfully!', data: result });
    
  } catch (error) {
    if (error instanceof Error) {
      res.status(400).json({ error: error.message }); // Hata durumunda 400 döner
    } else {
      res.status(400).json({ error: error }); // Hata durumunda 400 döner
    }
  }
};

export const returnBook = async (req: Request, res: Response) => {
  try {
    const { userId, bookId } = req.params; // İstekten kullanıcı ve kitap ID'sini al
    const { score } = req.body; // İstekten kullanıcı ve kitap ID'sini al
    const result = await returnBookService(userId, bookId, score); // Service katmanını çağır
    res.status(200).json({ message: 'Book returned successfully!', data: result });
    
  } catch (error) {
    if (error instanceof Error) {
      res.status(400).json({ error: error.message }); // Hata durumunda 400 döner
    } else {
      res.status(400).json({ error: error }); // Hata durumunda 400 döner
    }
  }
};