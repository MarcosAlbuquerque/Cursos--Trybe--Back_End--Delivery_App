const express = require('express');
const app = require('./app');
const CORS = require('cors');

const port = process.env.PORT || 3001;

app.use(express.json());
app.use(CORS());

app.listen(port, () => {
    console.log(`Api rodando na porta ${port}`);
});
