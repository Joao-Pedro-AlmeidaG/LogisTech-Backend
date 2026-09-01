const dotenv = require('dotenv');
dotenv.config();

module.exports = {
  PORT: process.env.PORT || 3000,
  MONGODB_URI: process.env.MONGODB_URI || 'mongodb://localhost:27017/logistech_db',
  JWT_SECRET: process.env.JWT_SECRET || 'logistech_chave_secreta_jwt_2026'
};
