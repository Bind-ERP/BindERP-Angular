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


export interface Service {
    ID?: string;
    code?: string;
    title?: string;
    description?: string;
    creationDate?: Date;
    category1ID?: string;
    category2ID?: string;
    category3ID?: string;
    chargeVAT?: boolean;
    pricingType?: number;
    pricingTypeText?: string;
    unit?: string;
    currencyID?: string;
    currencyCode?: string;
    variableConcept?: boolean;
    sATCode?: number;
    sATUnit?: number;
}
