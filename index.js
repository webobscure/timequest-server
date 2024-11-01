require('dotenv').config()
const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
const cookieParser = require('cookie-parser');
const router = require('./router/index');

const app = express()
const PORT = process.env.PORT || 3000;

app.use(express.json())
app.use(cors());
app.use(cookieParser());
app.use('/api', router);

app.post('/signup', async (req, res) => {
    const {email, nickname, password} = req.body
})


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})
