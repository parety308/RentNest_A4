import { Router } from "express";
import { categoryController } from "./catrgory.controller";

const router=Router();
router.post("/",categoryController.createCategory)
router.get("/",categoryController.getAllCategories);

export const categoryRoute=router;