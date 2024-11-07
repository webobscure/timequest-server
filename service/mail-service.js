const nodemailer = require('nodemailer');

class MailService {

    constructor() {
        this.transporter = nodemailer.createTransport({
            service: "Yandex",
            host: "smtp.yandex.ru",
            port: 465,
            secure: true, // true for 465, false for other ports
            auth: {
              user: process.env.SMTP_USER, // generated ethereal user
              pass: process.env.SMTP_PASSWORD // generated ethereal password
            }
          });
    }
    async sendActivationMail(to, link) {
        await this.transporter.sendMail({
            from: process.env.SMTP_USER,
            to,
            subject: 'Активация аккаунта на ' + process.env.API_URL,
            text: 'Вы зарегистрировались в приложении Timequest!',
            html: 
            `
                <div>
                <h1>Для активации перейдите по ссылке</h1>
                <a href="${link}">${link}</a>
                </div>
            `
        })
    }

   
}

module.exports = new MailService();