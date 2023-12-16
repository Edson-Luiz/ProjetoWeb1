import { Router } from 'express'
import { CreatePessoasController } from '../controller/pessoas/CreatePessoasController.js'
import { GetAllPessoasController } from '../controller/pessoas/GetAllPessoasController.js'
import { GetByIdPessoasController } from '../controller/pessoas/GetByIdPessoasController.js'
import { UpdatePessoasController } from '../controller/pessoas/UpdatePessoasController.js'
import { DeletePessoasController } from '../controller/pessoas/DeletePessoasController.js'

const pessoasRouter = Router()

//Create
const createPessoasController = new CreatePessoasController()
pessoasRouter.post('/pessoas', createPessoasController.handle)

//GetAll
const getAllPessoasController = new GetAllPessoasController()
pessoasRouter.get('/pessoas', getAllPessoasController.handle)

//GetById
const getByIdPessoasController = new GetByIdPessoasController()
pessoasRouter.get('/pessoas/:id', getByIdPessoasController.handle)

//Update
const updatePessoasController = new UpdatePessoasController()
pessoasRouter.put('/pessoas', updatePessoasController.handle)

//Delete
const deletePessoasController = new DeletePessoasController()
pessoasRouter.delete('/pessoas', deletePessoasController.handle)
 
export {pessoasRouter}