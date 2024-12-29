import Joi from 'joi';

export const createBookSchema = Joi.object({
  name: Joi.string().min(3).required(), // Kitap adı zorunlu ve en az 3 karakter olmalı
  average_rating: Joi.string(), // Reyting sayı olmalı
});

export const getBookSchema = Joi.object({
  id: Joi.string().required(),
});

export const getBooksSchema = Joi.object({
});