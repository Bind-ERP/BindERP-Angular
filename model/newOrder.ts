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
import { NewOrderProduct } from './newOrderProduct';
import { NewOrderService } from './newOrderService';


export interface NewOrder {
    addressID: string;
    clientID: string;
    comments?: string;
    currencyID: string;
    discountAmount?: number;
    discountType?: number;
    docNumberID?: string;
    exchangeRate?: number;
    iSRRate?: number;
    locationID: string;
    orderDate: Date;
    priceListID: string;
    purchaseOrder?: string;
    vATRate?: number;
    vATRetRate?: number;
    warehouseID: string;
    emails?: Array<string>;
    products?: Array<NewOrderProduct>;
    services?: Array<NewOrderService>;
}