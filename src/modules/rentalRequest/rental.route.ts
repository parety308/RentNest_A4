import { Router } from "express";
import { requestController } from "./rental.controller";
import auth from "../../middlewares/auth";
import { Role } from "../../../generated/prisma/enums";

const router = Router();

router.post('/', auth([Role.TENANT]), requestController.createRequest);
export const requestRoute = router;