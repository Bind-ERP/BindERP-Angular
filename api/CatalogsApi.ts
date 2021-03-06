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

import * as models from '../model/models';

/* tslint:disable:no-unused-variable member-ordering */

export class CatalogsApi {
    protected basePath = 'http://api.bind.com.mx';
    public defaultHeaders : any = {};

    static $inject: string[] = ['$http', '$httpParamSerializer', 'basePath'];

    constructor(protected $http: ng.IHttpService, protected $httpParamSerializer?: (d: any) => any, basePath?: string) {
        if (basePath !== undefined) {
            this.basePath = basePath;
        }
    }

    /**
     * 
     * @summary Obtiene la lista de bancos.
     * @param filter Filters the results, based on a Boolean condition.
     * @param orderby Sorts the results.
     * @param top Returns only the first n results.
     * @param skip Skips the first n results.
     */
    public catalogsGetBanks (filter?: string, orderby?: string, top?: number, skip?: number, extraHttpRequestParams?: any ) : ng.IHttpPromise<models.BankPage> {
        const localVarPath = this.basePath + '/api/Banks';

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        if (filter !== undefined) {
            queryParameters['$filter'] = filter;
        }

        if (orderby !== undefined) {
            queryParameters['$orderby'] = orderby;
        }

        if (top !== undefined) {
            queryParameters['$top'] = top;
        }

        if (skip !== undefined) {
            queryParameters['$skip'] = skip;
        }

        let httpRequestParams: ng.IRequestConfig = {
            method: 'GET',
            url: localVarPath,
            params: queryParameters,
            headers: headerParams
        };

        if (extraHttpRequestParams) {
            httpRequestParams = (<any>Object).assign(httpRequestParams, extraHttpRequestParams);
        }

        return this.$http(httpRequestParams);
    }
    /**
     * 
     * @summary Obtiene la lista de Categorias.
     */
    public catalogsGetCategories (extraHttpRequestParams?: any ) : ng.IHttpPromise<Array<models.Category1>> {
        const localVarPath = this.basePath + '/api/Categories';

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let httpRequestParams: ng.IRequestConfig = {
            method: 'GET',
            url: localVarPath,
            params: queryParameters,
            headers: headerParams
        };

        if (extraHttpRequestParams) {
            httpRequestParams = (<any>Object).assign(httpRequestParams, extraHttpRequestParams);
        }

        return this.$http(httpRequestParams);
    }
    /**
     * 
     * @summary Obtiene la lista de monedas.
     * @param filter Filters the results, based on a Boolean condition.
     * @param orderby Sorts the results.
     * @param top Returns only the first n results.
     * @param skip Skips the first n results.
     */
    public catalogsGetCurrencies (filter?: string, orderby?: string, top?: number, skip?: number, extraHttpRequestParams?: any ) : ng.IHttpPromise<models.CurrencyPage> {
        const localVarPath = this.basePath + '/api/Currencies';

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        if (filter !== undefined) {
            queryParameters['$filter'] = filter;
        }

        if (orderby !== undefined) {
            queryParameters['$orderby'] = orderby;
        }

        if (top !== undefined) {
            queryParameters['$top'] = top;
        }

        if (skip !== undefined) {
            queryParameters['$skip'] = skip;
        }

        let httpRequestParams: ng.IRequestConfig = {
            method: 'GET',
            url: localVarPath,
            params: queryParameters,
            headers: headerParams
        };

        if (extraHttpRequestParams) {
            httpRequestParams = (<any>Object).assign(httpRequestParams, extraHttpRequestParams);
        }

        return this.$http(httpRequestParams);
    }
    /**
     * 
     * @summary Obtiene la lista de sucursales.
     * @param filter Filters the results, based on a Boolean condition.
     * @param orderby Sorts the results.
     * @param top Returns only the first n results.
     * @param skip Skips the first n results.
     */
    public catalogsGetLocations (filter?: string, orderby?: string, top?: number, skip?: number, extraHttpRequestParams?: any ) : ng.IHttpPromise<models.LocationPage> {
        const localVarPath = this.basePath + '/api/Locations';

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        if (filter !== undefined) {
            queryParameters['$filter'] = filter;
        }

        if (orderby !== undefined) {
            queryParameters['$orderby'] = orderby;
        }

        if (top !== undefined) {
            queryParameters['$top'] = top;
        }

        if (skip !== undefined) {
            queryParameters['$skip'] = skip;
        }

        let httpRequestParams: ng.IRequestConfig = {
            method: 'GET',
            url: localVarPath,
            params: queryParameters,
            headers: headerParams
        };

        if (extraHttpRequestParams) {
            httpRequestParams = (<any>Object).assign(httpRequestParams, extraHttpRequestParams);
        }

        return this.$http(httpRequestParams);
    }
    /**
     * 
     * @summary Obtiene la lista de precios.
     * @param filter Filters the results, based on a Boolean condition.
     * @param orderby Sorts the results.
     * @param top Returns only the first n results.
     * @param skip Skips the first n results.
     */
    public catalogsGetPriceLists (filter?: string, orderby?: string, top?: number, skip?: number, extraHttpRequestParams?: any ) : ng.IHttpPromise<models.PriceListPage> {
        const localVarPath = this.basePath + '/api/PriceLists';

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        if (filter !== undefined) {
            queryParameters['$filter'] = filter;
        }

        if (orderby !== undefined) {
            queryParameters['$orderby'] = orderby;
        }

        if (top !== undefined) {
            queryParameters['$top'] = top;
        }

        if (skip !== undefined) {
            queryParameters['$skip'] = skip;
        }

        let httpRequestParams: ng.IRequestConfig = {
            method: 'GET',
            url: localVarPath,
            params: queryParameters,
            headers: headerParams
        };

        if (extraHttpRequestParams) {
            httpRequestParams = (<any>Object).assign(httpRequestParams, extraHttpRequestParams);
        }

        return this.$http(httpRequestParams);
    }
    /**
     * 
     * @summary Obtiene la lista de Series.
     * @param docType 
     */
    public catalogsGetSeries (docType: number, extraHttpRequestParams?: any ) : ng.IHttpPromise<Array<models.Series>> {
        const localVarPath = this.basePath + '/api/Series';

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        // verify required parameter 'docType' is not null or undefined
        if (docType === null || docType === undefined) {
            throw new Error('Required parameter docType was null or undefined when calling catalogsGetSeries.');
        }

        if (docType !== undefined) {
            queryParameters['docType'] = docType;
        }

        let httpRequestParams: ng.IRequestConfig = {
            method: 'GET',
            url: localVarPath,
            params: queryParameters,
            headers: headerParams
        };

        if (extraHttpRequestParams) {
            httpRequestParams = (<any>Object).assign(httpRequestParams, extraHttpRequestParams);
        }

        return this.$http(httpRequestParams);
    }
    /**
     * 
     * @summary Obtiene la lista de usuarios.
     * @param filter Filters the results, based on a Boolean condition.
     * @param orderby Sorts the results.
     * @param top Returns only the first n results.
     * @param skip Skips the first n results.
     */
    public catalogsGetUsers (filter?: string, orderby?: string, top?: number, skip?: number, extraHttpRequestParams?: any ) : ng.IHttpPromise<models.UserPage> {
        const localVarPath = this.basePath + '/api/Users';

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        if (filter !== undefined) {
            queryParameters['$filter'] = filter;
        }

        if (orderby !== undefined) {
            queryParameters['$orderby'] = orderby;
        }

        if (top !== undefined) {
            queryParameters['$top'] = top;
        }

        if (skip !== undefined) {
            queryParameters['$skip'] = skip;
        }

        let httpRequestParams: ng.IRequestConfig = {
            method: 'GET',
            url: localVarPath,
            params: queryParameters,
            headers: headerParams
        };

        if (extraHttpRequestParams) {
            httpRequestParams = (<any>Object).assign(httpRequestParams, extraHttpRequestParams);
        }

        return this.$http(httpRequestParams);
    }
}
