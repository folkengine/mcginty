const fs = require('fs');
const dotenv = require('dotenv');
const envTestConfig = dotenv.parse(fs.readFileSync('.env.example'));

module.exports = {
  envTestConfig,
};
