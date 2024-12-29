import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/database';

export class Book extends Model {
  public id!: number;
  public name!: string;
  public average_rating!: number;
}

Book.init(
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING, allowNull: false },
    average_rating: { type: DataTypes.STRING, defaultValue: -1 },
  },
  {
    sequelize,
    tableName: 'Books',
    timestamps: true,
  }
);

export default Book;