var mongoose = require('mongoose');  
var bcrypt   = require('bcrypt-nodejs');

var adminSchema = mongoose.Schema({  
    username: String,
    passw: String,
    name: String,
    dept: String
});

adminSchema.methods.generateHash = function(passw) {  
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};
adminSchema.methods.validPassword = function(passw) {  
  return bcrypt.compareSync(password, this.local.passw);
};
module.exports = mongoose.model('User', adminSchema);  
