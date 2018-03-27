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


export interface NewProduct {
    title: string;
    cost: number;
    price: number;
    currencyId: string;
    exchangeRate?: number;
    code: string;
    description?: string;
    SKU?: string;
    category1Id?: string;
    category2Id?: string;
    category3Id?: string;
    IEPS?: number;
}
