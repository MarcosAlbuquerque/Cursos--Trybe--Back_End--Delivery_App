const express = require('express');
const cors = require('cors');

const loginRoutes = require('./routes/LoginRoutes');
const usersRoutes = require('./routes/UsersRoutes');
const productsRoutes = require('./routes/ProductsRoutes');

const app = express();
app.use(express.json());
app.use(cors());

app.use('/users', usersRoutes);
app.use('/login', loginRoutes);
app.use('/', productsRoutes);

module.exports = app;