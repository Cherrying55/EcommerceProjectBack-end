export const cartmodel = joi.object({
    user: joi.string().required(),
    items: joi.array().items(Joi.object({
      code: joi.string().required(),
      price: joi.string().required(),
      img: joi.string().required()
    }))
  
  })