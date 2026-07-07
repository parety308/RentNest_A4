import { Router } from "express";
import { authController } from "./user.controller";
import auth from "../../middlewares/auth";

const router = Router();
router.post('/register', authController.resgisterUser);
router.post("/login", authController.loginUser);
router.get("/me", auth, authController.getMe);

export const authRoute = router;