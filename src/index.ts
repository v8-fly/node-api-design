import app from "./express_Server"
import * as dotenv from "dotenv"

// Gets all enviornment variables mentuioned in .env and
// makes it available for your node app
dotenv.config()

app.listen(3003, () => {
  console.log("Server listening on http//localhost:3003 🥳🥳")
})
