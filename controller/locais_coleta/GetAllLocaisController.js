import { prisma } from "../../src/database/client.js";

export class GetAllLocaisController{

    async handle(request, response){

        const locaisColeta = await prisma.locaisColeta.findMany()
        return response.json(locaisColeta)

    }

}