import pedidoController from "../controllers/pedidoController.js";
import express from "express"

const pedidoRouter = express.Router()

pedidoRouter.get("/", pedidoController.read)
pedidoRouter.post("/", pedidoController.create)
pedidoRouter.put("/:id", pedidoController.update)
pedidoRouter.delete("/:id", pedidoController.delete)

export default pedidoRouter