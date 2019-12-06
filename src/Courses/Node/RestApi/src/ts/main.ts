console.log('Starting Server');

import {Server} from './server/server';
import {usersRoutes} from './users/users.routes'

const server = new Server();

server.bootstrap([usersRoutes]).then(server => {
    console.log('Server is listening on: ', server.application.address());
}).catch(error => {
    console.log('Server Failed to Start');
    console.log(error);
    process.exit(1);
})