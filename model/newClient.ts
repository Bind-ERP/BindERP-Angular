/**
 * Bind ERP API
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: v1
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import { NewAddress } from './newAddress';


export interface NewClient {
    legalName: string;
    commercialName: string;
    RFC: string;
    creditDays: number;
    creditAmount: number;
    priceListID: string;
    accountingNumber: string;
    email?: string;
    paymentMethod?: number;
    paymentTerm?: number;
    locationID?: string;
    salesEmployeeID?: string;
    creditEmployeeID?: string;
    comment?: string;
    address?: NewAddress;
    telephone?: string;
    accountNumber?: string;
    defaultDiscount?: number;
    source?: string;
}
