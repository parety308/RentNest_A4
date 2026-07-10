import { Router } from "express";
import { authController } from "./user.controller";
import auth from "../../middlewares/auth";
import { Role } from "../../../generated/prisma/client";
import { prisma } from "../../lib/prisma";
const router = Router();
router.post('/register', authController.resgisterUser);
router.post("/login", authController.loginUser);
//delete all users
router.delete("/", auth([Role.ADMIN]), async (req, res) => {
    const result = await prisma.user.deleteMany();
    // console.log("deleted users : ", result);
});
router.get("/me", auth([Role.ADMIN, Role.TENANT, Role.LANDLORD]), authController.getMe);
export const authRoute = router;
//# sourceMappingURL=user.route.js.map