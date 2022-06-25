const jwt = require('jsonwebtoken')
const {expires,jwtSecret} = require('../config/jwt')

module.exports.generateToken = (user) => {
    const { _id,userName } = user
    return jwt.sign({ sub: _id, userName }, jwtSecret, {
      expiresIn: expires,
    })
  }

module.exports.verifyToken = (token) => {
  try{
    return jwt.verify(token,jwtSecret)
  }catch(error){
    throw new Error()
  }
}