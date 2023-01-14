import express from 'express'
import {getAllTodos} from '../../controller/todoController.js'


const todoRouter =  express.Router()


todoRouter.get("",getAllTodos)

export {todoRouter}