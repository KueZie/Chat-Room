const msgNode = document.querySelector('#msg-node');
const msgContainer = document.querySelector('#message-container');
const app = document.querySelector('#app');
let userName;
const socket = io();

function submitMsg() {
    if (!userName) {
        userName = msgNode.value;
        throwLocalMsg(`Name set to ${msgNode.value}.`);
        return;
    }
    data = {
        content: msgNode.value,
        author: userName
    }
    socket.emit('message', data);
}

function throwLocalMsg(msg) {

    msgContainer.innerHTML += `
    
        <p>CONSOLE: ${msg}</p>
    
    `;

}

socket.on('message', data => {
    const msg = new Message(data.author, data.content);
    msgContainer.innerHTML += msg.format();
});

throwLocalMsg('Your first message will define your name!');