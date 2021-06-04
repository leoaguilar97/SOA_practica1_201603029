const express = require('express');
const cors = require('cors');
const { evaluate } = require('./utils');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('', (_req, res) => res.sendStatus(200));

app.post('/eval', ({ body }, res) => {
    const { expression } = body;
    return res.send(evaluate(expression));
});

const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, console.log(`API iniciada en http://localhost:${PORT}`));
