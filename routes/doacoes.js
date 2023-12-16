import { Router } from 'express'
import { CreateDoacoesController } from '../controller/doacoes/CreateDoacoesController.js'
import { GetAllDoacoesController } from '../controller/doacoes/GetAllDoacoesController.js'
import { GetByIdDoacoesController } from '../controller/doacoes/GetByIdDoacoesController.js'
import { UpdateDoacoesController } from '../controller/doacoes/UpdateDoacoesController.js'
import { DeleteDoacoesController } from '../controller/doacoes/DeleteDoacoesController.js'

const doacoesRouter = Router()

// Create
const createDoacoesController = new CreateDoacoesController()
doacoesRouter.post('/doacoes', createDoacoesController.handle)

// GetAll
const getAllDoacoesController = new GetAllDoacoesController()
doacoesRouter.get('/doacoes', getAllDoacoesController.handle)

// GetById
const getByIdDoacoesController = new GetByIdDoacoesController()
doacoesRouter.get('/doacoes/:id', getByIdDoacoesController.handle)

// Update
const updateDoacoesController = new UpdateDoacoesController()
doacoesRouter.put('/doacoes', updateDoacoesController.handle)

// Delete
const deleteDoacoesController = new DeleteDoacoesController()
doacoesRouter.delete('/doacoes', deleteDoacoesController.handle)

export { doacoesRouter }