import { Request, Response } from 'express';
import { borrowBookService } from '../services/borrowService';

export const borrowBook = async (req: Request, res: Response) => {
  try {
    const { userId, bookId } = req.body; // İstekten kullanıcı ve kitap ID'sini al
    const result = await borrowBookService(userId, bookId); // Service katmanını çağır
    res.status(200).json({ message: 'Kitap başarıyla ödünç alındı', data: result });
    
  } catch (error) {
    if (error instanceof Error) {
      res.status(400).json({ error: error.message }); // Hata durumunda 400 döner
    } else {
      res.status(400).json({ error: error }); // Hata durumunda 400 döner
    }
  }
};