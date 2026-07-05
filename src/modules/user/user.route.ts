import { Router } from "express";
import { authController } from "./user.controller";

const router = Router();
router.post('/register', authController.getAllUser)

export const authRoute = router;