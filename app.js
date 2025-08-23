import express from "express"
import dotenv from "dotenv"
/////////////////////////////////////////////////////////////////
import { routerTask } from "./src/routers/task.routes.js"
import { routerUser } from "./src/routers/user.routes.js"
import { startDB } from "./src/config/tasks_users_db.js"
dotenv.config();
////////////////////////////////////////////////////////////////


const app = express()
const PORT = process.env.PORT

app.use(express.json())
app.use("/api",routerTask)
app.use("/api",routerUser)

startDB().then(()=>{
    app.listen(PORT, () => {
  console.log(`Ejecutandose en el servidor http://localhost:${PORT}`)
})
})