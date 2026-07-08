import { Router } from "express";
import { requestController } from "./rental.controller";
import auth from "../../middlewares/auth";
import { Role } from "../../../generated/prisma/enums";

const router = Router();

router.post('/', auth([Role.TENANT]), requestController.createRequest);
router.get('/', auth([Role.TENANT]), requestController.getRequestByTenantId);
router.get('/:id', auth([Role.TENANT]), requestController.getRequestByRequestId);
export const requestRoute = router;