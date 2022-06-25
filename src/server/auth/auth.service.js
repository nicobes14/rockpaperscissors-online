const User = require('../user/user.model')

module.exports.registerService = async (body) => {
    const newUser = new User(body);
    newUser.password = await newUser.encryptPassword(body.password);
    await newUser.save();
    return newUser
}

module.exports.findOneService = async (body) => {
    return await User.findOne({userName: body.userName})
}

module.exports.loginService = async (user,password) => {
    return await user.matchPassword(password)
}