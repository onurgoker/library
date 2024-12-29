import Joi from 'joi';

export const borrowBookSchema = Joi.object({
  userId: Joi.number().required(), // Kullanıcı ID zorunlu
  bookId: Joi.number().required(), // Kitap ID zorunlu
});