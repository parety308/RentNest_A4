import { ICreateProperty } from "../property/property.interface";
import { IUpdateProperty } from "./landlord.interface";
export declare const landlordService: {
    createPropertyDB: (payload: ICreateProperty, landlordId: string) => Promise<any>;
    updatePropertyDB: (propertyId: string, propertyData: IUpdateProperty, landlordId: string) => Promise<any>;
    deletePropertyDB: (propertyId: string, landlordId: string) => Promise<any>;
    getAllRentalRequestsDB: (landlordId: string) => Promise<any>;
    updateRentalRequestDB: (landlordId: string, rentalRequestId: string, payload: any) => Promise<any>;
};
//# sourceMappingURL=landlord.service.d.ts.map