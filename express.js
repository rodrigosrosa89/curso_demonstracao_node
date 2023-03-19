const express = require('express');
const app = express();
const port = 3000;

const logMiddleware = function (req, res, next) {
    console.log('Api recebeu alguma informação');

    next();
};

app.use(express.static('./site'));

app.use(logMiddleware);

app.get('/', function (req, res) {
    res.send('Hello world!')
});

app.get('/pt', (req, res) => res.send('Olá mundo!'));

app.post('/post', function (req, res) {
    res.send({
        status: 'ok'
    });
});

app.listen(port, () =>
    console.log('Example app listening at http://localhost:${port})')
);