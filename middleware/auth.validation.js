import { userSchema } from '../schema/user.schema.js'
import { usersCollection, sessionsCollection } from '../database/db.js'
import bcrypt from 'bcrypt'

export async function signUpValidation(req, res, next) {
  const user = req.body

  const { error } = userSchema.validate(user, { abortEarly: false })

  if (error) {
    return res.status(400)
  }

  const checkUser = await usersCollection.findOne({ email: user.email })
  if (checkUser) return res.status(409)

  res.locals.user = user

  next()

}

export async function signInBodyValidation(req, res, next) {
  const { email, password } = req.body

  try {
    const user = await usersCollection.findOne({ email })

    if (!user) return res.status(401).send('Unauthorized')

    const passwordIsOk = bcrypt.compareSync(password, user.password)

    if (!passwordIsOk) return res.status(401).send('Unauthorized')

    res.locals.user = user
  } catch (error) {
    console.error(error)
    res.status(500)
  }

  next()
}

export async function authRoutesValidation(req, res, next) {
  const { authorization } = req.headers
  const token = authorization?.replace("Bearer ", "")

  if (!token) return res.status(401).send("Unauthorized")

  try {
    const session = await sessionsCollection.findOne({ token })
    if (!session) return res.status(401).send("Unauthorized")

    const user = await usersCollection.findOne({ _id: session.userId })

    if (!user) return res.status(401).send("Unauthorized")

    res.locals.user = user

  } catch (error) {
    console.erro(error)
    res.status(500)
  }

  next()

}