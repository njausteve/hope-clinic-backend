const bcrypt = require("bcrypt");
const saltRounds = 10;

module.exports = {
  // bcrypt password hashing
  hashPassword: function(plainTextPassword) {
    return bcrypt.hashSync(plainTextPassword, saltRounds);
  },

  // compare hash with plain text : returns true/false
  validatePassword: function(plainTextPassword, hash) {
    return bcrypt.compareSync(plainTextPassword, hash);
  }
};
