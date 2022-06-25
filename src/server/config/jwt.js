module.exports = {
    jwtSecret: process.env.JWT_SCRET || 'notSecret',
    expires: process.env.JWT_EXPIRES || '1h'
  }