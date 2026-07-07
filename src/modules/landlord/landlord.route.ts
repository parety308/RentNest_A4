import { Router } from "express";
import { landlordController } from "./landlord.controller";
import auth from "../../middlewares/auth";
import { Role } from "../../../generated/prisma/enums";

const router = Router();
router.post('/properties', auth([Role.LANDLORD]), landlordController.createProperty);
router.put("/properties/:id", auth([Role.LANDLORD]), landlordController.updateProperty);
router.delete('/properties/:id', auth([Role.LANDLORD]), landlordController.deleteProperty);
router.get('/request', auth([Role.LANDLORD]), landlordController.getAllRentalRequests);
router.patch("/requests/:id", auth([Role.LANDLORD]), landlordController.updateRentalRequest)


export const landlordRouter = router;