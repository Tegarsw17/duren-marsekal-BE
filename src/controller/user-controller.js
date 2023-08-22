import userService from '../service/user-service.js'

const register = async (req, res, next) => {
  const user = req.user
  const request = req.body
  try {
    const result = await userService.register(user, request)
    res.status(200).json({
      data: result,
    })
  } catch (e) {
    next(e)
  }
}

const login = async (req, res, next) => {
  try {
    const result = await userService.login(req.body)
    res.status(200).json({
      data: result,
    })
  } catch (e) {
    next(e)
  }
}

const logout = async (req, res, next) => {
  try {
    await userService.logout(req.user.username)
    res.status(200).json({
      data: 'OK',
    })
  } catch (e) {
    next(e)
  }
}

export default {
  register,
  login,
  logout,
}
