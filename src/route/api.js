import express from 'express'
import userController from '../controller/user-controller.js'
import { authMiddleware } from '../middleware/auth-middelware.js'
import presensiController from '../controller/presensi-controller.js'

const userRouter = new express.Router()

userRouter.use(authMiddleware)

userRouter.post('/api/users', userController.register)
userRouter.delete('/api/users', userController.logout)

userRouter.post('/api/users/presensi', presensiController.regis)

export { userRouter }
