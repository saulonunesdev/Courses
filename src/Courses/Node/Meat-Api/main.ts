import {Server} from './server/server'
import {usersRouter} from './users/users.routers'

const server = new Server()

server.bootstrap([usersRouter]).then(server=>{
    console.log('Server is Listening on: ', server.application.address())
}).catch(error=>{
    console.log('Server failed to Start: ')
    console.error(error)
    process.exit(1)
})

console.log("main script init")
