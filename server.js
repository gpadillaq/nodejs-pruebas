var express = require('express');
var User = require('./models/user').User;

var app = express();

app.set("view engine", "ejs");

app.get('/create', function(req, res) {
  var user = new User({
    name: 'Gerald Padilla',
    username: 'gpadillaq',
    password: '123412',
    age: 24,
    email: 'gpadillaq@gmail.com'
  });

  user.save();
  res.redirect('/users');
});

app.get('/users', function(req, res) {
  var data = {
    nombre: 'Gerald Padilla',
    usuarios: User.find(function (err, users) {
      return users;
    })
  };
  res.render('index', data);
});

app.listen(8080);
