import express from 'express'
import { todoRouter } from './v1/todoRouter.js'
const rootRouter =  express.Router()


rootRouter.use('/todos',todoRouter)
export {rootRouter}