import jwt from "jsonwebtoken"
import * as bcrypt from "bcrypt"

// Used when someone tries to sign in
export const comparePasswords = (password, hashedPassword) => {
  return bcrypt.compare(password, hashedPassword)
}

// bcrypt.hash(password, 5) we do , 5 for salt
export const hashPassword = (password) => {
  return bcrypt.hash(password, 5)
}

export const createJWT = (user) => {
  // JWT Basically converts object to string
  // should be something unique about a user so that when we add secret and
  // dskin the object we get that unique identifier
  const token = jwt.sign(
    { id: user.id, username: user.username },
    process.env.JWT_SECRET
  )
  return token
}
export const protect = (req, res, next) => {
  // From FrontEnd you have to pass me something on authorizaton header
  // We want a bearer token literaly means starts with bearer bearer__can_be_anything_(api keys , jwt etc)
  const bearer = req.headers.authorization

  if (!bearer) {
    res.status(401)
    res.send({ message: "Not authorized 😕😕😕😕😕" })
    return
  }

  // You need to send me a bearer that looks like this
  // Bearer 65uyvjhvjvjhvjbxsbsxigx8787t
  // Thats why we split on space

  const [, token] = bearer.split(" ")
  if (!token) {
    console.log("here")
    res.status(401)
    res.send({ message: "Not Valid Token 😕😕😕😕😕" })
    return
  }

  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET)
    console.log("payload12345", payload)
    req.user = payload

    next()
    return
  } catch (e) {
    console.error(e)
    res.status(401)
    res.send({ message: "Not Valid Token Chal Bhak 😕😕😕😕😕" })
    return
  }
}
