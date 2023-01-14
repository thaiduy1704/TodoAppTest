import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

import {successCode,failCode,errorCode} from '../ultis/response.js'

async function main() {

  // Connect the client

  await prisma.$connect()

  // ... you will write your Prisma Client queries here

}


main()

  .then(async () => {

    await prisma.$disconnect()

  })

  .catch(async (e) => {

    console.error(e)

    await prisma.$disconnect()

    process.exit(1)

  })


const getAllTodos = async (req, res) => {
  try {
    const data = await prisma.todos.findMany()
    successCode(res, data)

  } catch (error) {
    failCode(res)
  }
}

export{
    getAllTodos
}