import { Role } from "../../../generated/prisma/enums";
export interface IRegisterPayload {
    name: string;
    email: string;
    password: string;
    role: Role;
    isBanned: boolean;
}
//# sourceMappingURL=user.interface.d.ts.map