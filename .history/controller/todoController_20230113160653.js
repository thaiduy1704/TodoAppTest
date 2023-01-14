import {PrismaClient} from '@prisma/client'

import {successCode,failCode,errorCode} from '../ultis/response.js'

const prisma = new PrismaClient()

const getAllTodos = async (req, res) => {
  try {
    const data = await prisma.Todos.findMany()
    successCode(res, data)

  } catch (error) {
    failCode(res)
  }
}