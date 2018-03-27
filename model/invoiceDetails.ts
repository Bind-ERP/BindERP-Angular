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
import { InvoiceDetailsProduct } from './invoiceDetailsProduct';
import { InvoiceDetailsService } from './invoiceDetailsService';


export interface InvoiceDetails {
    ID?: string;
    series?: string;
    number?: number;
    clientID?: string;
    clientName?: string;
    paymentTerms?: number;
    status?: string;
    statusCode?: number;
    clientPhoneNumber?: string;
    clientContact?: string;
    RFC?: string;
    createdByID?: string;
    createdByName?: string;
    creationDate?: Date;
    applicationDate?: Date;
    priceListID?: string;
    priceListName?: string;
    locationID?: string;
    locationName?: string;
    warehouseID?: string;
    warehouseName?: string;
    cFDIPaymentMethod?: string;
    cFDIPaymentTerm?: string;
    cFDIAccountNumber?: string;
    currencyName?: string;
    exchangeRate?: number;
    purchaseOrder?: string;
    fiscalID?: string;
    address?: string;
    comments?: string;
    subtotal?: number;
    discount?: number;
    VAT?: number;
    IEPS?: number;
    vATRet?: number;
    iSRRet?: number;
    payments?: number;
    creditNotes?: number;
    products?: Array<InvoiceDetailsProduct>;
    services?: Array<InvoiceDetailsService>;
}