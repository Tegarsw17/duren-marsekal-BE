import Joi from 'joi'

const registerUservalidation = Joi.object({
  name: Joi.string().max(255).required(),
  username: Joi.string().max(255).required(),
  email: Joi.string().max(255).required(),
  password: Joi.string().max(255).required(),
  phone: Joi.string().max(255).required(),
  city_former: Joi.string().max(255).required(),
  join_date: Joi.string().max(255).required(),
})

const loginUserValidation = Joi.object({
  username: Joi.string().max(255).required(),
  password: Joi.string().max(255).required(),
})

const getUservalidation = Joi.string().max(100).required()

export { registerUservalidation, getUservalidation, loginUserValidation }
