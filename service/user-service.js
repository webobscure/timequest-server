const UserModel = require("../models/User");
const bcrypt = require("bcrypt");
const uuid = require("uuid");
const mailService = require("../service/mail-service");
const tokenService = require("../service/token-service");
const UserDto = require("../dtos/user-dto");
class UserService {
    async registration(email, password, nickname) {
      const candidate = await UserModel.findOne({ where: { email } });  // Добавлен параметр where для поиска
      if (candidate) {
        throw new Error(`Пользователь с почтовым адресом ${email} уже существует!`);
      }
  
      // Шифруем пароль
      const hashPassword = await bcrypt.hash(password, 10);
      const activationLink = uuid.v4();
  
      console.log(`Credentials: ${email} ${password} ${nickname} ${activationLink}`); // Для дебага
  
      // Создаем пользователя
      const user = await UserModel.create({
        email,
        password: hashPassword,
        nickname,
        activationLink,
      });
  
      // Отправляем письмо с активацией
      await mailService.sendActivationMail(email, activationLink);
  
      // Создаем токены
      const userDto = new UserDto(user); // id, email, isActivated
      const tokens = tokenService.generateTokens({ ...userDto });
      await tokenService.saveToken(userDto.id, tokens.refreshToken);
  
      // Возвращаем результат
      return {
        ...tokens,
        user: userDto,
      };
    }
  }

module.exports = new UserService();
