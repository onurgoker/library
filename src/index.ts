import express, { Application } from 'express';
import sequelize from './config/database'; // Veritabanı bağlantısı

const app: Application = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Basit bir test endpoint'i
app.get('/', (req, res) => {
  res.send('Library Management API çalışıyor!');
});

// Veritabanı tablolarını oluştur
(async () => {
  try {
    // Veritabanını senkronize et
    await sequelize.sync({ force: false }); // force: true, tabloları sıfırlar (dikkatli kullan!)
    console.log('SQLite veritabanı başarıyla senkronize edildi.');

    // Server'ı başlat
    app.listen(PORT, () => {
      console.log(`Sunucu ${PORT} portunda çalışıyor.`);
    });
  } catch (error) {
    console.error('Veritabanı bağlantı hatası:', error);
  }
})();