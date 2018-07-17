const express = require('express');
const app = express();
const assert = require('assert');
const http = require('http').createServer(app);
const io = require('socket.io')(http);
const bodyParser = require('body-parser');
const path = require('path');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

function basicFileHandler(reqPath, file, root=path.join(__dirname, '..', 'public')) {

    app.get(reqPath, (req, resp) => {
        resp.sendFile(file, { root: root })
    });

}

io.on('connection', socket => {
    console.log('User connected', socket.id);
    socket.on('message', data => {
        io.emit('message', data);
    });
});

basicFileHandler('/', 'Chat-Room.html');

http.listen(8080);