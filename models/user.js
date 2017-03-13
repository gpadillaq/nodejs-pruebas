var mongoose = require('mongoose');
var Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost/pruebas');

var user_schema = new Schema({
  name: String,
  username: String,
  password: String,
  age: Number,
  email: String
});

var User = mongoose.model('User', user_schema);

module.exports.User = User;
