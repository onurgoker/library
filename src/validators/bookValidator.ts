import Joi from 'joi';

export const createBookSchema = Joi.object({
  name: Joi.string().required(), // Kitap adı zorunlu olmalı
  total_rating: Joi.number(), // Reyting puanı sayı olmalı
  rating_count: Joi.number(), // Reyting miktarı sayı olmalı
});

export const getBookSchema = Joi.object({
  id: Joi.string().required(),
});

export const getBooksSchema = Joi.object({
});