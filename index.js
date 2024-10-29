const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
const app = express()
const PORT = process.env.PORT || 3000;

app.use(express.json())
app.use(cors());




app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})
