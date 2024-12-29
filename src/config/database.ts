import { Sequelize } from 'sequelize';

// SQLite bağlantısı oluştur
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './database.sqlite', // Veritabanı dosyasının yolu
});

export default sequelize;