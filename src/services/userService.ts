// userService.ts
import { User } from '../models';

export const createUserService = async (userData: any) => {
 const user = await User.create(userData)
 if (!user) throw new Error('Kullanıcı oluşturulamadı');
 return user;
};

export const getUserService = async (userId: string) => {
 const user = await User.findByPk(userId);
 if (!user) throw new Error('Kullanıcı bulunamadı');
 return user;
};

export const getAllUsersService = async () => {
 const users = await User.findAll();
 return users;
};