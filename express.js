const express = require('express');
const app = express();
const port = 3000;
app.get('/', (req, res) => res.send('Hello world!'));

app.get('/pt', (req, res) => res.send('Olá mundo!'));

app.post('/post', function (req, res) {
    res.send({
        status : 'ok'
    });
});

app.listen(port, () => 
console.log('Example app listening at http://localhost:${port})')
);