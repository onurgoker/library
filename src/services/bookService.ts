// bookService.ts
import { Book } from '../models';

export const createBookService = async (bookData: any) => {
 const book = await Book.create(bookData);
 if (!book) throw new Error('Kitap oluşturulamadı');
 return book;
};

export const getBookService = async (bookId: string) => {
 const book = await Book.findByPk(bookId);
 if (!book) throw new Error('Kitap bulunamadı');
 return book;
};

export const getAllBooksService = async () => {
 const books = await Book.findAll();
 return books;
};