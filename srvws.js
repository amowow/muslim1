const websocket = require('ws')
const wss = new websocket.Server({
    port: 5000
});

const {uuidv4} = require("uuid")

const clients = new Map();

wss.on("connection", (ws) => {
    const id = uuidv4();
    const data = {
        id
    };
    clients.set(ws, data);
})

wss.on("close", (ws) => {
    clients.delete(ws);
})