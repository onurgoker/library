import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/database';

export class Book extends Model {
  public id!: number;
  public name!: string;
  public total_rating!: number;
  public rating_count!: number;
}

Book.init(
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING, allowNull: false },
    total_rating: { type: DataTypes.NUMBER },
    rating_count: { type: DataTypes.NUMBER },
  },
  {
    sequelize,
    tableName: 'Books',
    timestamps: true,
  }
);

export default Book;