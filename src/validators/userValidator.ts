import Joi from 'joi';

export const createUserSchema = Joi.object({
  name: Joi.string().min(3).required(), // İsim zorunlu ve en az 3 karakter olmalı
});

export const getUserSchema = Joi.object({
  id: Joi.string().required(),
});

export const getUsersSchema = Joi.object({
});