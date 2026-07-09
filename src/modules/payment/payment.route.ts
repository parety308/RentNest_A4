import { Router } from "express";
import { Role } from "../../../generated/prisma/client";
import auth from "../../middlewares/auth";
import { paymentController } from "./payment.controller";

const router = Router();

router.post("/create",auth([Role.TENANT]),paymentController.createPayment);

router.post("/confirm",paymentController.confirmPayment);

router.get("/",auth([Role.TENANT]),paymentController.getPaymentHistory);

router.get("/:id",auth([Role.TENANT]),paymentController.getPaymentDetails);

export const paymentRoute = router;