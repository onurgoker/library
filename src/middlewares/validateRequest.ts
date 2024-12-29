import { Request, Response, NextFunction } from 'express';
import { ObjectSchema } from 'joi';

// validateRequest middleware'i hem params hem de body için çalışacak şekilde güncellendi
export const validateRequest = (schemas: { params?: ObjectSchema; body?: ObjectSchema }) => {
  return (req: Request, res: Response, next: NextFunction): void => {
    const errors: string[] = [];

    // Params doğrulaması
    if (schemas.params) {
      const { error } = schemas.params.validate(req.params, { abortEarly: false });
      if (error) errors.push(...error.details.map((err) => err.message));
    }

    // Body doğrulaması
    if (schemas.body) {
      const { error } = schemas.body.validate(req.body, { abortEarly: false });
      if (error) errors.push(...error.details.map((err) => err.message));
    }

    // Eğer herhangi bir doğrulama hatası varsa, tüm hataları döndür
    if (errors.length > 0) {
      res.status(400).json({ errors }); // Hataları array olarak döndür
      return;
    }

    // Hata yoksa bir sonraki middleware'e geç
    next();
  };
};