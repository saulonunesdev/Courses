console.log('Inicio server');

import * as restify from 'restify';

const server = restify.createServer({
    name: 'Nodejs Prata',
    version: '1.0.0'
});

server.get('/test', (req, res, next) => {
    res.json({message: 'It Works!'})
    return next();
});

server.listen(3000, ()=>{
    console.log('Api Rodando com Sucesso na porta http://localhost:3000');
});