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
  const filePath = path.join(__dirname, './markdown/egypt.md'); // Укажите путь к вашему MD файлу

  // Читаем файл
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error('Ошибка при чтении файла:', err);
      return res.status(500).send('Ошибка при чтении файла.');
    }

    // Преобразуем Markdown в HTML
    const htmlContent = marked(data);

    // Отправляем HTML контент
    res.send(`
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Markdown Viewer</title>
        <style>
          body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            margin: 20px;
          }
          pre {
            background: #f4f4f4;
            padding: 10px;
            border-radius: 5px;
          }
          code {
            color: #d63384;
          }
        </style>
      </head>
      <body>
        ${htmlContent}
      </body>
      </html>
    `);
  });
});


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})







