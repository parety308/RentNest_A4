import { Router } from "express";
import { categoryController } from "./catrgory.controller";

const router=Router();
router.post("/",categoryController.createCategory)

export const categoryRoute=router;