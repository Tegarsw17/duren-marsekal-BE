import { prismaClient } from '../application/database.js'
import {
  getUservalidation,
  loginUserValidation,
  registerUservalidation,
} from '../validation/user-validation.js'
import { ResponseError } from '../error/response-error.js'
import { validate } from '../validation/validation.js'
import bcrypt from 'bcrypt'
import { v4 as uuid } from 'uuid'
import { logger } from '../application/logging.js'

const register = async (userI, request) => {
  const role = userI.role_id
  const user = validate(registerUservalidation, request)

  if (role !== 1) {
    throw new ResponseError(401, 'Unauthotized')
  }

  const countUser = await prismaClient.user.count({
    where: {
      username: user.username,
    },
  })

  if (countUser === 1) {
    throw new ResponseError(400, 'username already exsit')
  }
  const uniqueCode = uuid().toString()
  user.unique_code = uniqueCode
  user.password = await bcrypt.hash(user.password, 10)
  user.photo = 'default.png'
  user.role_id = 2
  user.salary = '0'

  return prismaClient.user.create({
    data: user,
    select: {
      name: true,
    },
  })
}

const login = async (request) => {
  const loginReq = validate(loginUserValidation, request)
  console.log(loginReq.username)

  const user = await prismaClient.user.findFirst({
    where: {
      username: loginReq.username,
    },
    select: {
      username: true,
      password: true,
    },
  })
  //   logger.info(user)

  if (!user) {
    throw new ResponseError(401, 'username or password wrong')
  }

  const isPasswordValid = await bcrypt.compare(loginReq.password, user.password)
  if (!isPasswordValid) {
    throw new ResponseError(401, 'username or password wrong')
  }

  const token = uuid().toString()
  return prismaClient.user.update({
    data: {
      token: token,
    },
    where: {
      username: user.username,
    },
    select: {
      token: true,
    },
  })
}

const logout = async (username) => {
  username = validate(getUservalidation, username)

  const user = await prismaClient.user.findUnique({
    where: {
      username: username,
    },
  })

  if (!user) {
    throw new ResponseError(404, 'user not found')
  }

  return prismaClient.user.update({
    where: {
      username: username,
    },
    data: {
      token: null,
    },
    select: {
      username: true,
    },
  })
}

export default {
  register,
  login,
  logout,
}
