import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/database';

export class User extends Model {
  public id!: number;
  public name!: string;
  public email!: string;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

User.init(
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING, allowNull: false },
    email: { type: DataTypes.STRING, allowNull: false, unique: true },
  },
  {
    sequelize, // Bağlantıyı kullan
    tableName: 'Users',
    timestamps: true, // createdAt ve updatedAt otomatik
  }
);

export default User;