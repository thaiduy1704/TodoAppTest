import {PrismaClient} from '@prisma/client'

import {successCode,failCode,errorCode} from '../ultis/response.js'

const prisma = new PrismaClient()

const getAllBookings = async (req, res) => {
  try {
    const data = await prisma.booking.findMany()
    successCode(res, data)

  } catch (error) {
    failCode(res)
  }
}