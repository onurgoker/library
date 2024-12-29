import { Book, BorrowingRecord, User } from '../models';

export const borrowBookService = async (userId: number, bookId: number) => {
  // Kullanıcı var mı kontrol et
  const user = await User.findByPk(userId);
  if (!user) throw new Error('Kullanıcı bulunamadı');

  // Kitap var mı kontrol et
  const book = await Book.findByPk(bookId);
  if (!book) throw new Error('Kitap bulunamadı');

  // Kitap zaten ödünç alınmış mı kontrol et
  const isBorrowed = await BorrowingRecord.findOne({
    where: { book_id: bookId, return_date: null }, // return_date null ise kitap ödünçte demektir
  });
  if (isBorrowed) throw new Error('Kitap başka bir kullanıcı tarafından ödünç alınmış');

  // Yeni bir ödünç kayıt oluştur
  const borrowingRecord = await BorrowingRecord.create({
    user_id: userId,
    book_id: bookId,
    borrow_date: new Date(),
  });

  return borrowingRecord; // Ödünç kayıt bilgisini döndür
};