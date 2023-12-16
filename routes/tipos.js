import { Router } from 'express'
import { CreateTiposController } from '../controller/tipos_sanguineos/CreateTiposController.js'
import { GetAllTiposController } from '../controller/tipos_sanguineos/GetAllTiposController.js'
import { GetByIdTiposController } from '../controller/tipos_sanguineos/GetByIdTiposController.js'
import { UpdateTiposController } from '../controller/tipos_sanguineos/UpdateTiposController.js'
import { DeleteTiposController } from '../controller/tipos_sanguineos/DeleteTiposController.js'

const tiposRouter = Router()

//GetAll
const getAllTiposController = new GetAllTiposController()
tiposRouter.get('/tipos', getAllTiposController.handle)

//GetById
const getByIdTiposController = new GetByIdTiposController()
tiposRouter.get('/tipos/:id', getByIdTiposController.handle)

//Create
const createTiposController = new CreateTiposController()
tiposRouter.post('/tipos', createTiposController.handle)

//Update
const updateTiposController = new UpdateTiposController()
tiposRouter.put('/tipos', updateTiposController.handle)

//Delete
const deleteTiposController = new DeleteTiposController()
tiposRouter.delete('/tipos', deleteTiposController.handle)

export {tiposRouter}