import { prisma } from "../../src/database/client.js";

export class GetAllPessoasController {


    async handle(request, response){

        const pessoa = await prisma.pessoas.findMany()
        return response.json(pessoa)

    }

}