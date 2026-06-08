const jsonServer = require('json-server');
const cors = require('cors');
const path = require('path');

const server = jsonServer.create();
const router = jsonServer.router('db/db.json');
const middlewares = jsonServer.defaults();

// Habilita CORS para qualquer origem
server.use(cors());
server.use(middlewares);
server.use(router);

server.listen(3000, () => {
    console.log('✅ JSON Server rodando em http://localhost:3000');
});