const UserService = require('../services/user_services');
const UserModel = require('../models/user_model');

exports.registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const newUser = await UserService.registerUser(name, email, password);
    res.status(200).json(newUser);
  } catch (error) {
    console.error('Registration failed:', error);
    res.status(500).json({ message: 'Registration failed' });
  }
};

//Uncomment and adjust the login function if needed
exports.loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
   
    const user = await UserService.loginUser(email, password);
    res.status(200).json(user);
  } catch (error) {
    console.error('Login failed:', error);
    res.status(500).json({ message: 'Login failed' });
  }
};
