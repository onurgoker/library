import { Request, Response, NextFunction } from 'express';
import { ObjectSchema } from 'joi';

// validateRequest middleware'ini hem params hem de body ile çalışacak şekilde yapılandırıyoruz
export const validateRequest = (schema: ObjectSchema, validateFor: 'params' | 'body' = 'body') => {
  return (req: Request, res: Response, next: NextFunction): void => {
    // Şimdi params veya body üzerinde doğrulama yapabiliriz
    const { error } = schema.validate(validateFor === 'params' ? req.params : req.body, { abortEarly: false });

    if (error) {
      res.status(400).json({ error: error.details.map((err) => err.message) }); // Hataları array olarak döner
      return;
    }
    next(); 
  };
};