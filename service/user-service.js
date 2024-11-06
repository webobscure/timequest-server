const UserModel = require('../models/User')
const bcrypt = require('bcrypt')
class UserService {
    async registration(email, password, nickname) {
        const candidate = await UserModel.findOne({email})
        if (candidate) {
            throw new Error(`Пользователь с почтовым адресо ${email} уже существует!`)
        }

        const hashPassword = await bcrypt.hash(password, 3) 
        const user = await UserModel.create({email, password, nickname})
    }
}

module.exports = new UserService();