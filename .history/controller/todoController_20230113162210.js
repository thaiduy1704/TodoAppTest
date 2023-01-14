import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

import {successCode,failCode,errorCode} from '../ultis/response.js'


const getAllTodos = async (req, res) => {
  try {
    const data = await
    successCode(res, data)

  } catch (error) {
    failCode(res)
  }
}

export{
    getAllTodos
}