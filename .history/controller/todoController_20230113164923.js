import { PrismaClient } from '@prisma/client'
const prismaCall = new PrismaClient()

import {successCode,failCode,errorCode} from '../ultis/response.js'



const getAllTodos = async (req, res) => {
  try {
    const data = await prisma. todos
    successCode(res, data)

  } catch (error) {
    failCode(res)
  }
}

export{
    getAllTodos
}