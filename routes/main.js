import { Router } from 'express'

const mainRouter = Router()

mainRouter.get('/', (request, response) => {

    response.json({
        message: "Server is runnig"
    })

})

export {mainRouter}