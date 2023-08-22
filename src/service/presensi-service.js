import { prismaClient } from '../application/database.js'
import { ResponseError } from '../error/response-error.js'
import { getUservalidation } from '../validation/user-validation.js'
import { validate } from '../validation/validation.js'

const regis = async (request, username) => {
  /*
    - validasi input user dari admin + cek role id
    - cek farmer berdasarkan unique_code V
    - generate tanggal dan jam
    */
  const adminUser = validate(getUservalidation, username)
  const userRole = await prismaClient.user.findUnique({
    where: {
      username: adminUser,
    },
  })

  if (userRole.role_id !== 1) {
    throw new ResponseError(401, 'Unautorized')
  }

  const userPresent = await prismaClient.user.findFirst({
    where: {
      unique_code: request.unique_code,
    },
  })

  console.log(userPresent)

  return prismaClient.logAbsensi.create({
    data: {
      user_id: userPresent.id,
      keterangan: 'masuk',
      created_at: '1661059879',
    },
  })
}

export default {
  regis,
}
