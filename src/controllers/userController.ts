// userController.ts
import { Request, Response } from 'express';
import { createUserService, getAllUsersService, getUserService } from '../services/userService';

// Request body için interface tanımla
interface CreateUserRequest {
  name: string;
 }
 
export const createUser = async (req: Request<{}, {}, CreateUserRequest>, res: Response) => {
  try {
    const userData = req.body;
    const result = await createUserService(userData);
    res.status(201).json({
      success: true,
      message: 'User has successfully been created!',
      data: result
    });
  } catch (error) {
    if (error instanceof Error) {
      res.status(400).json({ success: false, error: error.message });
    } else {
      res.status(400).json({ success: false, error: 'Unexpected error occured!' });
    }
  }
 };

export const getUser = async (req: Request, res: Response) => {

  try {
    const userId = req.params.id || req.query.id as string;
 
    const result = await getUserService(userId);
    res.status(200).json({
      success: true,
      data: result
    });
  } catch (error) {
    if (error instanceof Error) {
      res.status(404).json({ success: false, error: error.message });
    } else {
      res.status(400).json({ success: false, error: 'Beklenmeyen bir hata oluştu' });
    }
  }
 };

export const getAllUsers = async (req: Request, res: Response) => {
  try {
    const result = await getAllUsersService();
    res.status(200).json({ data: result });
  } catch (error) {
    if (error instanceof Error) {
      res.status(400).json({ error: error.message });
    } else {
      res.status(400).json({ error: error });
    }
  }
};