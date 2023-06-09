const express = require('express');
const http = require('http');
const webSocket = require('ws');

const app = express();

// Inicializa um servidor HTTP orquestrado pelo express
const server = http.createServer(app);

// Inicializa uma instância de servidor websocket a partir do servidor http
const wss = new webSocket.Server({ server });

// Função responsável por manusear a conexão websocket
wss.on('connection', (ws) => {
    // Função que trata as mensagens recebidas pelo servidor
    ws.on('message', (message) => {
        console.log('Mensagem recebida ', message);
        ws.send(message);
    });
});

// Inicia o servidor
server.listen(process.env.PORT || 9898, () => {
    console.log('Servidor conectado na porta: ', server.address().port);
});