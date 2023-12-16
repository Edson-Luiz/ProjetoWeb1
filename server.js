import express, { response } from 'express'
import { prisma } from "./src/database/client.js"
import { estadoRouter } from './routes/estados.js';
import { mainRouter } from './routes/main.js';
import { cidadeRouter } from './routes/cidades.js';

const server = express();
const PORT = 5000

server.use(express.json())

// Routes
server.get('/', (request, response) => {
    response.json({
        message: 'Status: Server is running.'
    })
})

server.get('/estados', async (request, response) => {
    const estados = await prisma.estado.findMany();
    return response.json(estados);

})

server.use(mainRouter)
server.use(estadoRouter)
server.use(cidadeRouter)


server.listen(PORT, () => {
    console.log(`[SERVER] Server is running on port ${PORT}`)
})