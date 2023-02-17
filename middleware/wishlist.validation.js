export async function wishValidation(req, res, next) {
    const { items, token } = req.body
  
    const session = await sessionsCollection.findOne({ token })
    const user = await usersCollection.findOne({ _id: session.userId })

  const wish = {
    items,
    user: user._id,
  }

  
    const { error } = wishSchema.validate(wish, { abortEarly: false })
  
    if (error) {
      return res.status(400)
    }
  
    res.locals.wish = wish
  
    next()
  
  }