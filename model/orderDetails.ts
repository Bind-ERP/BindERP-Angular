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

export interface OrderDetails {
    "ID"?: string;
    "ClientID"?: string;
    "ClientName"?: string;
    "PriceListName"?: string;
    "PriceListID"?: string;
    "LocationName"?: string;
    "LocationID"?: string;
    "WarehouseID"?: string;
    "WarehouseName"?: string;
    "OrderDate"?: Date;
    "Comments"?: string;
    "Number"?: number;
    "Address"?: string;
    "ClientContact"?: string;
    "PhoneNumber"?: string;
    "EmployeeName"?: string;
    "EmployeeID"?: string;
    "StatusCode"?: number;
    "PurchaseOrder"?: string;
    "Status"?: string;
    "CurrencyName"?: string;
    "CurrencyID"?: string;
    "ExchangeRate"?: number;
    "RFC"?: string;
    "ServiceSubtotal"?: number;
    "ProductSubtotal"?: number;
    "Discount"?: number;
    "VATRate"?: number;
    "VAT"?: number;
    "DiscountType"?: number;
    "IEPS"?: number;
    "IEPSRATE"?: number;
    "ISRRet"?: number;
    "ISRRetRate"?: number;
    "VatRet"?: number;
    "VatRetRate"?: number;
    "Total"?: number;
    "Products"?: Array<models.OrderDetailsProduct>;
    "Services"?: Array<models.OrderDetailsService>;
}

