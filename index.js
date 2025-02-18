require('dotenv').config()
const express = require("express");
const cors = require("cors");
const cookieParser = require('cookie-parser');
const fs = require('fs');
const path = require('path');
const { marked } = require('marked');

const router = require('./router/index');
const sequelize = require("./config/database");
const errorsMiddlewares = require('./middlewares/errors-middlewares');
const articlesRouter = require('./router/articles');

const app = express()
const PORT = process.env.PORT || 3000;
(async () => {
  const tables = await sequelize.getQueryInterface().showAllTables();
  console.log('Таблицы в БД:', tables);
})();
sequelize.sync({ alter: true }) // или { force: true } для удаления и создания заново
  .then(() => console.log("База данных синхронизирована"))
  .catch((err) => console.error("Ошибка синхронизации БД:", err));

app.use(express.json())
app.use(cors());
app.use(cookieParser());
app.use('/api', router);
app.use(errorsMiddlewares);
app.use('/articles', articlesRouter);

// Маршрут для чтения и отображения Markdown файла
app.get('/markdown', (req, res) => {
  const filePath = path.join(__dirname, './markdown/egypt.md');

  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error('Ошибка при чтении файла:', err);
      return res.status(500).send('Ошибка при чтении файла.');
    }

    // Отправляем Markdown-текст напрямую
    res.setHeader('Content-Type', 'text/plain'); // Важно: указываем тип контента
    res.send(data);
  });
});



app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})







