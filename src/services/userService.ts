// userService.ts
import { Book, BorrowingRecord, User } from '../models';

export const createUserService = async (userData: any) => {
 const user = await User.create(userData)
 if (!user) throw new Error('Kullanıcı oluşturulamadı');
 return user;
};

export const createUserBorrowService = async (data: any) => {
    const { userId, bookId } = data

    try {
        // Kullanıcı var mı kontrol edin
        const user = await User.findByPk(userId);
        if (!user) {
          throw new Error('User not found');
        }
    
        // Kitap var mı kontrol edin
        const book = await Book.findByPk(bookId);
        if (!book) {
          throw new Error('Book not found');
        }
    
        // Kitap zaten ödünç alınmış mı kontrol edin
        const existingBorrow = await BorrowingRecord.findOne({ where: { userId, bookId } });
        if (existingBorrow) {
          throw new Error('This book is already borrowed by the user');
        }
    
        // Kitap ödünç alma işlemi
        return await BorrowingRecord.create({ user_id:userId, book_id:bookId, borrowedAt: new Date() });
      } catch (error) {
        console.error(error);
        throw new Error('An error occurred while borrowing the book');
      }
};

export const getUserService = async (userId: string) => {
 const user = await User.findByPk(userId);
 if (!user) throw new Error('User not found');
 return user;
};

export const getAllUsersService = async () => {
 const users = await User.findAll();
 return users;
};