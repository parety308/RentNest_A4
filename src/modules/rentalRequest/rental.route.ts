import { Router } from "express";
import { requestController } from "./rental.controller";
import auth from "../../middlewares/auth";
import { Role } from "../../../generated/prisma/enums";

const router = Router();

router.post('/', auth([Role.TENANT,Role.ADMIN]), requestController.createRequest);
router.get('/', auth([Role.TENANT,Role.ADMIN]), requestController.getRequestByTenantId);
router.get('/:id', auth([Role.TENANT,Role.ADMIN]), requestController.getRequestByRequestId);
export const requestRoute = router;