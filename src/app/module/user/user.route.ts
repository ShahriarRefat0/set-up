import { Router } from "express";
import { UserController } from "./user.controller.js";


const router: Router = Router();

router.post("/create-user", UserController.createUser)

router.get("/getAllUsers", UserController.getAllUsers);

router.get("/:id", UserController.getUserById);

router.delete('/delete-avater', 
)

export const UserRoute = router;