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

export interface NewInvoice {
    "CurrencyID": string;
    "ClientID": string;
    "LocationID": string;
    "WarehouseID": string;
    "CFDIUse": number;
    "InvoiceDate": Date;
    "PriceListID": string;
    "ExchangeRate"?: number;
    "ISRRetRate"?: number;
    "VATRetRate"?: number;
    "Comments"?: string;
    "VATRate"?: number;
    "DiscountType"?: number;
    "DiscountAmount"?: number;
    "Products"?: Array<models.NewInvoiceProduct>;
    "Services"?: Array<models.NewInvoiceService>;
    "Emails"?: Array<string>;
    "PurchaseOrder"?: string;
    "CreditDays"?: number;
    "IsFiscalInvoice"?: boolean;
    "ShowIEPS"?: boolean;
    "Number"?: number;
    "Account"?: string;
    "Payments"?: Array<models.NewInvoicePayment>;
    "Serie"?: string;
}

