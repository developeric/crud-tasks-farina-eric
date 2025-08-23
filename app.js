import express from "express"
import dotenv from "dotenv"
/////////////////////////////////////////////////////////////////
import { routerTask } from "./src/routers/task.routes.js"
import { routerUser } from "./src/routers/user.routes.js"
import { startDB } from "./src/config/tasks_users_db.js"
import { routerLabel } from "./src/routers/label.routes.js"
import { routerLabelTask } from "./src/routers/label.task.routes.js"
import { routerProfile } from "./src/routers/profile.routes.js"
dotenv.config();
////////////////////////////////////////////////////////////////


const app = express()
const PORT = process.env.PORT

app.use(express.json())
app.use("/api",routerTask)
app.use("/api",routerUser)
app.use("/api",routerLabel)
app.use("/api",routerLabelTask)
app.use("/api",routerProfile)


startDB().then(()=>{
    app.listen(PORT, () => {
  console.log(`Ejecutandose en el servidor http://localhost:${PORT}`)
})
})