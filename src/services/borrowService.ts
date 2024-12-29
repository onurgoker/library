import { Book, BorrowingRecord, User } from '../models';

export const borrowBookService = async (userId: string, bookId: string) => {
  // Kullanıcı var mı kontrol et
  const user = await User.findByPk(userId);
  if (!user) throw new Error('User not found!');

  // Kitap var mı kontrol et
  const book = await Book.findByPk(bookId);
  if (!book) throw new Error('Book not found!');

  // Kitap zaten ödünç alınmış mı kontrol et
  const isBorrowed = await BorrowingRecord.findOne({
    where: { book_id: bookId, return_date: null }, // return_date null ise kitap ödünçte demektir
  });
  if (isBorrowed) throw new Error('Book has been borrowed by another user!');

  // Yeni bir ödünç kayıt oluştur
  const borrowingRecord = await BorrowingRecord.create({
    user_id: userId,
    book_id: bookId,
    borrow_date: new Date(),
  });

  return borrowingRecord; // Ödünç kayıt bilgisini döndür
};

export const returnBookService = async (userId: string, bookId: string, rating: number) => {
  try {
    console.log("ATATIING" + rating)
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

    // Kitap gerçekten ödünç alınmış mı kontrol edin
    const borrowedBook = await BorrowingRecord.findOne({ where: { 'user_id': userId, 'book_id': bookId } });
    if (!borrowedBook) {
      throw new Error('This book is not borrowed by the user');
    }

    // Kitap iade işlemini gerçekleştir
    const result = await borrowedBook.destroy(); // İlişkiden kaldır

    // İsteğe bağlı olarak değerlendirme puanını kaydet
    if (rating) {
      book.rating_count = (book.rating_count || 0) + 1;
      book.total_rating = (book.total_rating || 0) + rating;
      await book.save();
    }

    return result;
  } catch (error) {
    console.error(error);
    throw new Error('An error occurred while returning the book');
  }
};