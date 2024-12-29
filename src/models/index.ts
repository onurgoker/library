import User from './User';
import Book from './Book';
import BorrowingRecord from './BorrowingRecord';

// Modeller arası ilişkileri tanımlayın
User.hasMany(BorrowingRecord, { foreignKey: 'user_id' });
Book.hasMany(BorrowingRecord, { foreignKey: 'book_id' });

BorrowingRecord.belongsTo(User, { foreignKey: 'user_id' });
BorrowingRecord.belongsTo(Book, { foreignKey: 'book_id' });

export { User, Book, BorrowingRecord };