import express from 'express'
import { userRouter } from '../route/api.js'
import { errorMiddleware } from '../middleware/error-middelware.js'
import { publicRouter } from '../route/public-api.js'

export const web = express()
web.use(express.json())
web.use(publicRouter)
web.use(userRouter)

web.use(errorMiddleware)
