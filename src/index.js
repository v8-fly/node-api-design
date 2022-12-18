// comon js way 😣
const { log } = require("console")
const http = require("http")

const server = http.createServer((req, res) => {
  if (req.method === "GET" && req.url === "/") {
    console.log("Request Object :::", req)
    console.log("Response Object :::", res)
    console.log("Hey Hi from Server 🫡🫡")
    res.end()
  }
})

server.listen(3003, () => {
  console.log("Server listening on http//localhost:3003 🥳🥳")
})
