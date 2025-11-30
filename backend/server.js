import express from "express"
import userRoutes from "./routes/userRoutes.js"
import pedidoRouter from "./routes/pedidoRoutes.js";
import cors from "cors"

const app = express();
const port = 3001;
app.use(cors())
app.use(express.json())
app.use("/users", userRoutes)
app.use("/pedidos", pedidoRouter)

app.listen(port, console.log("Backend Funcionando"))