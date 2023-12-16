import { prisma } from '../../src/database/client.js'

export class UpdateEstadoController {

    async handle(request, response){

        const { id, nome, sigla} = request.body

        const estado = await prisma.estado.update({

            where: {
                id: parseInt(id)
            },

            data: {
                nome,
                sigla,
                updatedAt: new Date()
            }

        })

        return response.json(estado)

    }

}