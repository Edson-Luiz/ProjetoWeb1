import { prisma } from "../../src/database/client.js"

export class CreateEstadoController {

    async handle(request, response){

        const { nome, sigla } = request.body

        const estado = await prisma.estado.create({

            data: {
                nome,
                sigla
            }

        })

        return response.json(estado)

    }

}