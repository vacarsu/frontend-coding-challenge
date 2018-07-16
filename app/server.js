const express = require('express');
const path = require('path');
const http = require('http');

const app = express();
const port = process.env.PORT || '3000';
const server = http.createServer(app);

app.use(express.static(path.join(__dirname, 'dist/frontend-coding-challenge')));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/frontend-coding-challenge/index.html'));
});

app.set('port', port);

server.listen(port, () => console.log(`App running on localhost:${port}`));