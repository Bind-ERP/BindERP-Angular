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


export interface NewInvoicePayment {
    paymentMethod: number;
    accountID: string;
    amount: number;
    exchangeRate?: number;
    exchangeRateAccount?: number;
    reference: string;
}
