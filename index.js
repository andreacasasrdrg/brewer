import http from 'http'
import { dbConnect } from './db/dbConnect.js'
import { app } from "./server/app.js"
import "./loadEnvironment.js";

const PORT = process.env.PORT

dbConnect()
const server = http.createServer(app);

server.on('listening', () => {
  console.log('Listening on ' + PORT);
});

server.listen(PORT, () => {
  console.log(`Started on port: ${PORT}`)
})