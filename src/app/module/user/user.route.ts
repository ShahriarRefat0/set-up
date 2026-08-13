import { Router } from "express";
import { UserController } from "./user.controller.js";
import { upload } from "../../middleware/multer.middelware.js";


const router: Router = Router();

router.post("/create-user",
    upload.single('avatar'),
    UserController.createUser)

router.get("/getAllUsers", UserController.getAllUsers);

router.get("/:id", UserController.getUserById);

router.delete('/:id/delete-avater', UserController.deleteUserAavatar)


export const UserRoute = router;