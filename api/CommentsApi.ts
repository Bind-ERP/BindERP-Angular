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

export class CommentsApi {
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
     * @summary Agregar comentario
     * @param newComment 
     */
    public commentsAddComment (newComment: models.NewComment, extraHttpRequestParams?: any ) : ng.IHttpPromise<{}> {
        const localVarPath = this.basePath + '/api/Comments';

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        // verify required parameter 'newComment' is not null or undefined
        if (newComment === null || newComment === undefined) {
            throw new Error('Required parameter newComment was null or undefined when calling commentsAddComment.');
        }

        let httpRequestParams: ng.IRequestConfig = {
            method: 'POST',
            url: localVarPath,
            data: newComment,
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
     * @summary Listar comentarios por external ID
     * @param filter Filters the results, based on a Boolean condition.
     * @param orderby Sorts the results.
     * @param top Returns only the first n results.
     * @param skip Skips the first n results.
     */
    public commentsGet (filter?: string, orderby?: string, top?: number, skip?: number, extraHttpRequestParams?: any ) : ng.IHttpPromise<models.CommentPage> {
        const localVarPath = this.basePath + '/api/Comments';

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
