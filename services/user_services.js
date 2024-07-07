const UserModel = require('../models/user_model');

exports.registerUser = async (name, email, password) => {
  try {
    const newUser = new UserModel({
      name,
      email,
      password,
    });
    await newUser.save();
    return newUser;
  } catch (error) {
    throw error;
  }
};

//Uncomment and adjust the login function if needed
exports.loginUser = async (email, password) => {
  const user = await UserModel.findOne({ email, password });
  if (!user) {
    throw new Error('Invalid credentials');
  }
  return user;
};
