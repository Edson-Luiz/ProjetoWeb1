import { prisma } from "../../src/database/client.js";

export class CreateDoacoesController{

    async handle(request, response){

        const {pessoaId, localId, data} = request.body

        const doacoes = await prisma.doacoes.create({

            data:{
                pessoa:{
                    connect:{
                        id: pessoaId
                    }
                },
                local:{
                    connect:{
                        id: localId
                    }
                },
                data: new Date()
            }

        })

        return response.json(doacoes)

    }

}