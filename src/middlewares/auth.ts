import { NextFunction, Request, Response } from "express";
import { jwtUtils } from "../utils/jwtUtils";
import { config } from "../config";

const auth = (req: Request, res: Response, next: NextFunction) => {
    const token = req.cookies.accessToken;
    const verifiedToken = jwtUtils.verifyToken(token, config.jwt_access_token_secret as string);
    if (!verifiedToken.success) {
        return res.status(401).json({
            success: false,
            message: "Unauthorized"
        });
    };
    const user = {
        id: verifiedToken.data?.id,
        name: verifiedToken.data?.name,
        email: verifiedToken.data?.email,
        role: verifiedToken.data?.role

    }
     console.log("from auth : ",user)
    req.user = user;
    next();
};

export default auth;