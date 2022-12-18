import express from "express"
// Make ther server
const app = express()

app.get("/", (req, res) => {
  console.log("Hi From Express 🫡🫡")
  // express adds pretty cool styff to req and res objects
  res.status(200)
  //   200 -300 success status
  //   400 and soo wrong p/w and all
  //   500 server based errors

  res.json({ message: "Hey hi man 🦺🦺 Its form express" })
})

export default app
