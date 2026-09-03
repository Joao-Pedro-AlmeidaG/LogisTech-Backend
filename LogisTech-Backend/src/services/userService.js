const User = require('../models/User');

exports.getAllUsers = async () => {
  return await User.find({}, '-senha');
};

exports.getUserById = async (id) => {
  const user = await User.findById(id, '-senha');
  if (!user) throw new Error('Usuário não encontrado.');
  return user;
};
