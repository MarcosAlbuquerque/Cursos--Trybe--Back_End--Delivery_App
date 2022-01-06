const express = require('express');
const usersRoutes = require('./routes/UsersRoutes');
const loginRoutes = require('./routes/LoginRoutes');

const app = express();

app.use('/users', usersRoutes);
app.use('/login', loginRoutes);

module.exports = app;
