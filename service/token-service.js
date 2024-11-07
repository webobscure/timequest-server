const jwt = require('jsonwebtoken');
const tokenModel = require('../models/Token')
class TokenService {
    generateTokens(payload) {
        const acessToken = jwt.sign(payload, process.env.JWT_ACESS_SECRET, {expiresIn: '30m'})
        const refreshToken = jwt.sign(payload, process.env.JWT_REFRESH_SECRET, {expiresIn: '30d'})
        return {
            acessToken,
            refreshToken
        }

    }

    async saveToken(userId, refreshToken) {
        console.log('userId:', userId, 'refreshToken:', refreshToken); 
        const tokenData = await tokenModel.findOne({where :{user: userId}
        })
        if(tokenData) {
            tokenData.refreshToken = refreshToken;
            return tokenData.save();
        }
        const token = await tokenModel.create({user: userId, refreshToken});
        return token;
    }
}

module.exports = new TokenService();