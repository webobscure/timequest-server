require('dotenv').config()
const express = require("express");
const cors = require("cors");
const cookieParser = require('cookie-parser');
const router = require('./router/index');
const sequelize = require("./config/database");
const errorsMiddlewares = require('./middlewares/errors-middlewares');

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


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})
