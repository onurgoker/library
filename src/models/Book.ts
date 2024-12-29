import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/database';

export class Book extends Model {
  public id!: number;
  public title!: string;
  public author!: string;
  public average_rating!: number;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Book.init(
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    title: { type: DataTypes.STRING, allowNull: false },
    author: { type: DataTypes.STRING, allowNull: false },
    average_rating: { type: DataTypes.FLOAT, defaultValue: 0 },
  },
  {
    sequelize,
    tableName: 'Books',
    timestamps: true,
  }
);

export default Book;