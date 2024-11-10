const UserModel = require("../models/User");
const bcrypt = require("bcrypt");
const uuid = require("uuid");
const mailService = require("../service/mail-service");
const tokenService = require("../service/token-service");
const UserDto = require("../dtos/user-dto");
const ApiError = require('../exceptions/api-error');
class UserService {
    async registration(email, password, nickname) {
      const candidate = await UserModel.findOne({ where: { email } });  // Добавлен параметр where для поиска
      if (candidate) {
        throw ApiError.BadRequest(`Пользователь с почтовым адресом ${email} уже существует!`);
      }
  
      // Шифруем пароль
      const hashPassword = await bcrypt.hash(password, 3);
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
      await mailService.sendActivationMail(email, `${process.env.API_URL}/api/activate/${activationLink}`);
  
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
    async activate(activationLink) {
      const user = await UserModel.findOne({activationLink})
      if (!user) {
        throw ApiError.UnauthorizedError("Некорректная ссылка активации")
      }
      user.verifiedEmail = true;
      await user.save();
  }
  async login(email, password) {
    const user = await UserModel.findOne({email});
    if(!user) {
      throw ApiError.BadRequest("Пользователь не найден")
    }
    const isPassEquals = await bcrypt.compare(password, user.password);

    if(!isPassEquals) {
      throw ApiError.BadRequest("Неверный пароль")
    }
    const userDto = new UserDto(user);
    const tokens = tokenService.generateTokens({...userDto});

    await tokenService.saveToken(userDto.id, tokens.refreshToken);
    return {
      ...tokens,
      user: userDto,
    };
  }

  async logout(refreshToken) {
    const token = await tokenService.removeToken(refreshToken);
    return token;
  }

  async refresh(refreshToken) {
    if(!refreshToken) {
      throw ApiError.UnauthorizedError();
    }
    const userData = tokenService.validateRefreshToken(refreshToken);
    const tokenFromOb = await token.findToken(refreshToken);
    if(!userData || !tokenFromOb) {
      throw ApiError.UnauthorizedError();
    }
    const user = await UserModel.findByPk(userData.id);
    const userDto = new UserDto(user); // id, email, isActivated
      const tokens = tokenService.generateTokens({ ...userDto });
      await tokenService.saveToken(userDto.id, tokens.refreshToken);
  
      // Возвращаем результат
      return {
        ...tokens,
        user: userDto,
      };
  }
  
  async getAllUsers() {
    const users = await UserModel.findAll();
    return users;
  }
  }

module.exports = new UserService();
