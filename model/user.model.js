export const newusermodel = joi.object({
    name: joi.string().required(),
    email: joi.string().email().required(),
    password: joi.string().required(),
  });