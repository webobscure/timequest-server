const jwt = require('jsonwebtoken');
const { models } = require('../models'); // Импортируем объект с моделями
const tokenModel = models.Token;
class TokenService {
    generateTokens(payload) {
        const accessToken = jwt.sign(payload, process.env.JWT_ACCESS_SECRET, {expiresIn: '30m'})
        const refreshToken = jwt.sign(payload, process.env.JWT_REFRESH_SECRET, {expiresIn: '30d'})
        return {
            accessToken,
            refreshToken
        }

    }

    validateAccessToken(token) {
        try {
            const userData = jwt.verify(token, process.env.JWT_ACCESS_SECRET);
            return userData;
        } catch (e) {
            return null;
        }
    }

    validateRefreshToken(token) {
        try {
            const userData = jwt.verify(token, process.env.JWT_REFRESH_SECRET);
            return userData;
        } catch (e) {
            return null;
        }
    }

    async saveToken(userId, refreshToken) {
        console.log('userId:', userId, 'refreshToken:', refreshToken)
        const tokenData = await tokenModel.findOne({ where: { userId: userId } 

            
        })
        console.log('tokenData:', tokenData)

        if(tokenData) {
            tokenData.refreshToken = refreshToken;
            return tokenData.save();
        }
        const token = await tokenModel.create({userId: userId, refreshToken});
        return token;
    }

    async removeToken(refreshToken) {
        const tokenData = await tokenModel.destroy({
           where: { refreshToken }
        });
        return tokenData;
    }
     async findToken(refreshToken) {
        const tokenData = await tokenModel.findOne({
           where: { refreshToken }
        });
        return tokenData;
    }
}

module.exports = new TokenService();