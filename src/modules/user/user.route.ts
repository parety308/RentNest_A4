import { Router } from "express";
import { authController } from "./user.controller";

const router = Router();
router.get('/', authController.getAllUser)

export const authRoute = router;