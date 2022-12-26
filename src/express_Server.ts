import express from "express"
import router from "./router"
import morgan from "morgan"
import cors from "cors"
import { protect } from "./modules/auth"
import { createNewUser, signin } from "./handlers/user"

// Make the server
const app = express()

app.use(cors())
// morgan is a middleware (runs before our routes and calls next())
//used for logging since its a middle ware it should be used
// before our routes (on top level)
app.use(morgan("dev"))
// This middleware allows client to send us json
app.use(express.json())
// This middleware allows client to add query string
// Eg  'google.com/a=1,b=2' >> urlencoded will convert a=1,b=2 into object

// Just for fun middleware
app.use((req, res, next) => {
  req.HEY_JUST_FOR_FUN = "🇮🇳🇮🇳🇮🇳"
  next()
})

app.use(express.urlencoded({ extented: true }))

app.get("/", (req, res) => {
  console.log("Hi From Express 🫡🫡")
  // express adds pretty cool styff to req and res objects
  res.status(200)
  //   200 -300 success status
  //   400 and soo wrong p/w and all
  //   500 server based errors

  res.json({ message: "Hey hi man 🦺🦺 Its form express" })
})

// By below line what we make sure is in router.js the api becomes
//   /api/product
//   /product/:id
//   and so on ..

// We protect the whole router with a middleware meaning
// our middle ware will run first , check something and then it will go to our
// router handlers
app.use("/api", protect, router)

app.post("/user", createNewUser)
app.post("/signin", signin)
export default app
