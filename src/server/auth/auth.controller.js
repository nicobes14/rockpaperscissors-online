const { findOneService, registerService,loginService } = require('./auth.service');
const createError = require('http-errors');
const {generateToken,verifyToken} = require('./jwt.service')

module.exports.registerController = async (req, res) => {
  //look if user exists
  try {
    const UserFound = await findOneService(req.body);
    if (UserFound) return res.status(400).json(createError(400, 'Username already exists'));

    // register new user
    const User = await registerService(req.body);
    if(!User) return res.status(400).json(createError(400, 'Username already exists')); // error if user is not registered

    const access_token = generateToken(User)
    res.status(200).json({ access_token});
  } catch (error) {
    res.status(500).json({message: error.message})
  }
};

module.exports.loginController = async (req,res) => {
    try{
        // look if user exists
        const UserFound = await findOneService(req.body);
        if(!UserFound) return res.status(400).json(createError(400, 'Invalid Credentials'));

        if(!await loginService(UserFound,req.body.password)) return res.status(400).json(createError(400, 'Invalid Credentials'));

        const access_token = generateToken(UserFound)
        res.status(200).json({ access_token});
    }catch(error){
        res.status(500).json({message: error.message})
    }
}


module.exports.verifyTokenController = async (req,res) => {
  try{
    verifyToken(req.body.token)
    res.status(200).send()
  }catch(error){
    res.status(401).send()
  }
}