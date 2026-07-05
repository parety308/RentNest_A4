import { config } from "../../config";
import { prisma } from "../../lib/prisma";
import AppError from "../../utils/AppError";
import { IRegisterPayload } from "./user.interface";
import bcrypt from "bcrypt";
import HttpsStatus from "http-status-codes"
const registerUser = async (userData: IRegisterPayload) => {
    const { name, email, password, role, isBanned } = userData;

    //check user is exist or not
    const isExist = await prisma.user.findUnique({
        where: { email }
    });
    if (isExist) {
        throw new AppError(HttpsStatus.CONFLICT, "User already Exist");
    };

    //hashed password
    const hashPassword = await bcrypt.hash(password, config.bcrypt_salt_rounds);
    await prisma.user.create({
        data: {
            name,
            email,
            password: hashPassword,
            role,
            isBanned
        }
    });
    const user = await prisma.user.findUnique({
        where: { email },
        omit: {
            password: true
        }
    });
    return user;
}


export const authService = {
    registerUser
}