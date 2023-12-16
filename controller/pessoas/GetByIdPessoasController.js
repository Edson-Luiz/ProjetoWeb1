import { prisma } from "../../src/database/client.js";

export class GetByIdPessoasController{

    async handle(request, response){

        const {id} = request.params
        const pessoas = await prisma.pessoas.findUnique({

            where: {
                id: parseInt(id)
            }

        })

        return response.json(pessoas);

    }

}