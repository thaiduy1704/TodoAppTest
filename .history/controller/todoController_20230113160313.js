import {PrismaClient} from '@prisma/client'

import {successCode,failCode,errorCode} from '../ultis/response.js'

const prisma = new PrismaClient()