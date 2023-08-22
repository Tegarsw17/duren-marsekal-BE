import presensiService from '../service/presensi-service.js'

const regis = async (req, res, next) => {
  const username = req.user.username
  const request = req.body
  try {
    const result = await presensiService.regis(request, username)
    res.status(200).json({
      data: result,
    })
  } catch (e) {
    next(e)
  }
}

export default {
  regis,
}
