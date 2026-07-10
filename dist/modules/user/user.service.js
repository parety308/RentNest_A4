import { config } from "../../config/index";
import { prisma } from "../../lib/prisma";
import AppError from "../../utils/AppError";
import { jwtUtils } from "../../utils/jwtUtils";
import bcrypt from "bcrypt";
import HttpsStatus from "http-status-codes";
const registerUserDB = async (userData) => {
    const { name, email, password, role } = userData;
    //check user is exist or not
    const isExist = await prisma.user.findUnique({
        where: { email }
    });
    if (isExist) {
        throw new AppError(HttpsStatus.CONFLICT, "User already Exist");
    }
    ;
    //hashed password
    const hashPassword = await bcrypt.hash(password, config.bcrypt_salt_rounds);
    const user = await prisma.user.create({
        data: {
            name,
            email,
            password: hashPassword,
            role
        },
        select: {
            id: true,
            name: true,
            email: true,
            role: true,
            isBanned: true,
            createdAt: true,
            updatedAt: true,
        }
    });
    return user;
};
const logInUserIntoDB = async (userData) => {
    const { email, password } = userData;
    const isExist = await prisma.user.findUnique({
        where: { email }
    });
    if (!isExist) {
        throw new AppError(HttpsStatus.NOT_FOUND, "User not Found");
    }
    ;
    if (isExist.isBanned) {
        throw new AppError(HttpsStatus.FORBIDDEN, "Your account has been banned.");
    }
    const isMatchPassword = await bcrypt.compare(password, isExist.password);
    if (!isMatchPassword) {
        throw new AppError(HttpsStatus.UNAUTHORIZED, "Invalid email or password");
    }
    ;
    //create token
    const jwtPayload = {
        id: isExist.id,
        name: isExist.name,
        email: isExist.email,
        role: isExist.role
    };
    const accessToken = await jwtUtils.createToken(jwtPayload, config.jwt_access_token_secret, config.jwt_access_expires_in);
    const refreshToken = await jwtUtils.createToken(jwtPayload, config.jwt_refresh_secret, config.jwt_refresh_expires_in);
    delete isExist.password;
    return { accessToken, refreshToken, user: isExist };
};
const getMeDB = async (email) => {
    const user = await prisma.user.findUnique({
        where: { email }
    });
    if (!user) {
        throw new AppError(HttpsStatus.NOT_FOUND, "User not Found");
    }
    delete user.password;
    return user;
};
export const authService = {
    registerUserDB,
    logInUserIntoDB,
    getMeDB
};
//# sourceMappingURL=user.service.js.map