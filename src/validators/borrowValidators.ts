import Joi from 'joi';

export const borrowBookSchema = Joi.object({
});

export const returnBookSchema = Joi.object({
  userId: Joi.number().required(), // User ID required
  bookId: Joi.number().required(), // Book ID required
});

// Borrow işlemi için params doğrulaması
export const borrowParamsSchema = Joi.object({
  userId: Joi.number().integer().required(), // Kullanıcı ID zorunlu
  bookId: Joi.number().integer().required(), // Kitap ID zorunlu
});

// Return işlemi için params doğrulaması
export const returnParamsSchema = Joi.object({
  userId: Joi.number().integer().required(), // Kullanıcı ID zorunlu
  bookId: Joi.number().integer().required(), // Kitap ID zorunlu
});

// Return işlemi için body doğrulaması
export const returnBodySchema = Joi.object({
  score: Joi.number().integer().optional(), // Opsiyonel puan
});