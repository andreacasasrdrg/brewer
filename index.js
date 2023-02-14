import bodyParser from 'body-parser'
import express from 'express'
import http from 'http'

const PORT = process.env.PORT || 5000

const app = express();
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

const server = http.createServer(app);

server.on('listening', () => {
  console.log('Listening on ' + PORT);
});

server.listen(PORT, () => {
  console.log(`Started on port: ${PORT}`)
})