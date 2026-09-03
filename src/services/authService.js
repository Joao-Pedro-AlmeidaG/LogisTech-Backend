const User = require('../models/User');
const bcrypt = require('bcryptjs');
const generateToken = require('../utils/generateToken');

exports.register = async ({ nome, email, senha, perfil }) => {
  let existingUser = await User.findOne({ email });
  if (existingUser) {
    throw new Error('E-mail já cadastrado!!');
  }

  const salt = await bcrypt.genSalt(10);
  const senhaHash = await bcrypt.hash(senha, salt);

  const newUser = await User.create({
    nome,
    email,
    senha: senhaHash,
    perfil: perfil || 'MOTORISTA'
  });

  return {
    id: newUser._id,
    nome: newUser.nome,
    email: newUser.email,
    perfil: newUser.perfil
  };
};

exports.login = async ({ email, senha }) => {
  const user = await User.findOne({ email });
  if (!user) {
    throw new Error('Credenciais inválidas.');
  }

  const isValidPassword = await bcrypt.compare(senha, user.senha);
  if (!isValidPassword) {
    throw new Error('Credenciais inválidas.');
  }

  const token = generateToken({ id: user._id, perfil: user.perfil, nome: user.nome });

  return {
    token,
    usuario: {
      id: user._id,
      nome: user.nome,
      email: user.email,
      perfil: user.perfil
    }
  };
};
