// bookService.ts
import { Book, BorrowingRecord } from '../models';

export const createBookService = async (bookData: any) => {
 const book = await Book.create(bookData);
 if (!book) throw new Error('Kitap oluşturulamadı');
 return book;
};

export const getBookService = async (bookId: string) => {
 const book = await Book.findByPk(bookId);
 if (!book) throw new Error('Kitap bulunamadı');

 return {
    id: book.id,
    name: book.name,
    score: book.rating_count > 0 ? (book.total_rating / book.rating_count).toFixed(2) : -1
 };
};

export const getAllBooksService = async () => {
 const books = await Book.findAll({
    attributes: { exclude: ['total_rating', 'rating_count', 'createdAt', 'updatedAt']},
 });
 return books;
};