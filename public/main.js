const msgNode = document.querySelector('#msg-node');
const msgContainer = document.querySelector('#message-container');
const socket = io();



function submitMsg(data) {
    data = {
        content: data,
        author: socket.id
    }
    socket.emit('message', data);
}

msgNode.addEventListener('keypress', e => {
    if (e.key === 'Enter') {
        e.preventDefault();
        submitMsg(msgNode.value);
        msgNode.value = '';
    }
});

socket.on('message', data => {
    const msg = new Message(data.author, data.content);
    msgContainer.innerHTML += msg.format();
});