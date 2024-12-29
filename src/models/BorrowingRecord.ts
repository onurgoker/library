import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/database';

export class BorrowingRecord extends Model {
  public id!: number;
  public user_id!: number;
  public book_id!: number;
  public borrow_date!: Date;
  public return_date!: Date | null;
}

BorrowingRecord.init(
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    user_id: { type: DataTypes.INTEGER, allowNull: false },
    book_id: { type: DataTypes.INTEGER, allowNull: false },
    borrow_date: { type: DataTypes.DATE, allowNull: false },
    return_date: { type: DataTypes.DATE, allowNull: true },
  },
  {
    sequelize,
    tableName: 'BorrowingRecords',
    timestamps: false, // Zaman damgası istemiyoruz
  }
);

export default BorrowingRecord;