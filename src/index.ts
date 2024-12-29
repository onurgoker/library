import express, { Application } from 'express';
import sequelize from './config/database';
import userRoutes from './routes/users';
import bookRoutes from './routes/books';
import borrowRoutes from './routes/borrow'; // Borrow router'ını import et

const app: Application = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());


//routes
app.use('/users', userRoutes);
app.use('/borrow', borrowRoutes);
app.use('/books', bookRoutes);
app.get('/', (req, res) => {
  res.send('Library Management API works!');
});

// Veritabanını senkronize et ve server'ı başlat
(async () => {
  try {
    // Veritabanını senkronize et
    await sequelize.sync({ force: false }); // force: true, tüm tabloları sıfırlar
    console.log('SQLite database has been synced successfully.');

    // Server'ı başlat
    app.listen(PORT, () => {
      console.log(`Server is working on port ${PORT}!`);
    });
  } catch (error) {
    console.error('DB Connection error:', error);
  }
})();