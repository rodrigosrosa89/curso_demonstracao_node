// file system
const fileSystem = require('fs');

fileSystem.mkdir('./teste', function() {
    console.log('Criei o diretório teste');
})

fileSystem.writeFile('./teste/abcd.txt', 'Olá, tudo bem ? ', function() {
    console.log('Criei um novo arquivo no diretório teste com o nome abcd.txt');
})

fileSystem.readFile('./teste/abcd.txt', function(err, data) {
    console.log('O meu arquivo possui os dados: ' + data.toString());
})


const moment = require('moment');
console.log('Data atual');
console.log(moment().format());
console.log(moment().format('dd-mm-yyyy'));

const x = 1+ 1;
console.log('O valor de 1 + 1 é: ' + x)
