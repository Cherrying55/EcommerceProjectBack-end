export async function cartValidation(req, res, next) {
    const { items, token } = req.body

    const session = await sessionsCollection.findOne({ token })
    const user = await usersCollection.findOne({ _id: session.userId })

  const cart = {
    items,
    user: user._id,
  }
    const { error } = cartSchema.validate(cart, { abortEarly: false })
  
    if (error) {
      return res.status(400)
    }
  
    
    res.locals.cart = cart
  
    next()
  
  }