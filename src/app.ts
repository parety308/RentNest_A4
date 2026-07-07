import cookieParser from 'cookie-parser';
import express from 'express';
import HttpsStatus from "http-status-codes";
import cors from "cors"
import { config } from './config';
import { authRoute } from './modules/user/user.route';
import { globalErrorHandler } from './middlewares/globalErrorHandler';
import { propertyRoute } from './modules/property/property.route';
import { categoryRoute } from './modules/category/category.route';
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
app.use("/api/category", categoryRoute);

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