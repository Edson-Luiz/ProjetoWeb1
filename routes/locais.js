import { Router } from 'express'
import { CreateLocaisControler } from '../controller/locais_coleta/CreateLocaisController.js'
import { GetAllLocaisController } from '../controller/locais_coleta/GetAllLocaisController.js'
import { GetByIdLocaisController } from '../controller/locais_coleta/GetByIdLocaisController.js'
import { UpdateLocaisController } from '../controller/locais_coleta/UpdateLocaisController.js'
import { DeleteLocaisController } from '../controller/locais_coleta/DeleteLocaisController.js'

const locaisRouter = Router()

// Create
const createLocaisControler = new CreateLocaisControler()
locaisRouter.post('/locais', createLocaisControler.handle)


// GetAll
const getAllLocaisController = new GetAllLocaisController()
locaisRouter.get('/locais', getAllLocaisController.handle)


// GetById
const getByIdLocaisController = new GetByIdLocaisController()
locaisRouter.get('/locais/:id', getByIdLocaisController.handle)


// Update
const updateLocaisController = new UpdateLocaisController()
locaisRouter.put('/locais', updateLocaisController.handle)


// Delete
const deleteLocaisController = new DeleteLocaisController()
locaisRouter.delete('/locais', deleteLocaisController.handle)


export { locaisRouter }