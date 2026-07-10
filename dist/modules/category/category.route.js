import { Router } from "express";
import { categoryController } from "./catrgory.controller";
import auth from "../../middlewares/auth";
import { Role } from "../../../generated/prisma/client";
const router = Router();
router.post("/", auth([Role.ADMIN, Role.LANDLORD]), categoryController.createCategory);
router.get("/", auth([Role.ADMIN, Role.LANDLORD]), categoryController.getAllCategories);
export const categoryRoute = router;
//# sourceMappingURL=category.route.js.map