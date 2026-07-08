import cookieParser from 'cookie-parser';
import express from 'express';
import HttpsStatus from "http-status-codes";
import cors from "cors"
import { config } from './config';
import { authRoute } from './modules/user/user.route';
import { globalErrorHandler } from './middlewares/globalErrorHandler';
import { propertyRoute } from './modules/property/property.route';
import { categoryRoute } from './modules/category/category.route';
import { landlordRouter } from './modules/landlord/landlord.route';
import { requestRoute } from './modules/rentalRequest/rental.route';
import { adminRoute } from './modules/admin/admin.route';
import { paymentRouter } from './modules/payment/payment.route';
const app = express();

//use middleware
app.use(cors({
    origin: config.app_url,
    credentials: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser())
app.use("/api/auth", authRoute);
app.use("/api/properties", propertyRoute);
app.use("/api/categories", categoryRoute);
app.use("/api/landlord",landlordRouter);
app.use("/api/rentals",requestRoute);
app.use("/api/admin",adminRoute);
app.use('/api/payment',paymentRouter)

app.use(globalErrorHandler);
function startServer() {
    app.get('/', (req, res) => {
        res.status(HttpsStatus.ACCEPTED).json({
            success: true,
            message: "RentNest App Apis Is running"
        });
    });
}
startServer();
export default app;