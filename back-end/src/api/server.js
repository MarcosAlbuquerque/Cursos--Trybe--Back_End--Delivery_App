const express = require('express');
const CORS = require('cors');
const app = require('./app');

const port = process.env.PORT || 3001;

app.use(express.json());
app.use(CORS());

app.listen(port, () => {
    console.log(`Api rodando na porta ${port}`);
});
