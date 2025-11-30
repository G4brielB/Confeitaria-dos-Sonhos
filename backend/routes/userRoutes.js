import userController from "../controllers/userController.js"
import express from "express"

const userRoutes = express.Router()

userRoutes.get("/", userController.read)
userRoutes.post("/", userController.create)
userRoutes.put("/:id", userController.update)
userRoutes.delete("/:id", userController.delete)


export default userRoutes