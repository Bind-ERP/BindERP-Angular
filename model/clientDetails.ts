/**
 * Bind ERP API
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: v1.2
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

import * as models from './models';

export interface ClientDetails {
    "ID"?: string;
    "RFC"?: string;
    "LegalName"?: string;
    "CommercialName"?: string;
    "CreditDays"?: number;
    "CreditAmount"?: number;
    "PaymentMethod"?: string;
    "CreationDate"?: Date;
    "Status"?: string;
    "SalesContact"?: string;
    "CreditContact"?: string;
    "Loctaion"?: string;
    "Comments"?: string;
    "PriceList"?: string;
    "PaymentTermType"?: string;
    "Email"?: string;
    "Telephones"?: string;
    "Number"?: number;
    "AccountNumber"?: string;
    "DefaultDiscount"?: number;
    "ClientSource"?: string;
    "Account"?: string;
    "Addresses"?: Array<string>;
}

