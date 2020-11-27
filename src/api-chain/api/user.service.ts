/*
 * Copyright(c) 2009 - 2019 Abelium d.o.o.
 * Kajuhova 90, 1000 Ljubljana, Slovenia
 * All rights reserved
 * Copyright(c) 1995 - 2018 T-Systems Multimedia Solutions GmbH
 * Riesaer Str. 5, 01129 Dresden
 * All rights reserved.
 *
 * coffee-be
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by the openapi-typescript-angular-generator.
 * https://github.com/alenabelium/openapi-typescript-angular-generator
 * Do not edit the class manually.
 */

/* tslint:disable:no-unused-variable member-ordering */

import { Inject, Injectable, Optional }                      from '@angular/core';
import { ValidatorFn, Validators } from '@angular/forms';

import { HttpClient, HttpHeaders, HttpParams,
         HttpResponse, HttpEvent }                           from '@angular/common/http';
import { CustomHttpUrlEncodingCodec }                        from '../encoder';

import { Observable }                                        from 'rxjs';
import { catchError }                                        from 'rxjs/operators';

import { ApiResponseAny } from '../model/apiResponseAny';
import { ApiResponseChainUser } from '../model/apiResponseChainUser';
import { ApiResponsePaginatedListChainUser } from '../model/apiResponsePaginatedListChainUser';
import { ChainUser } from '../model/chainUser';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';

/**
 * Namespace for getUser.
 */
export namespace GetUser {
    /**
     * Parameter map for getUser.
     */
    export interface PartialParamMap {
      /**
       * database id of the product
       */
      dbId: string;
    }

    /**
     * Enumeration of all parameters for getUser.
     */
    export enum Parameters {
      /**
       * database id of the product
       */
      dbId = 'dbId'
    }

    /**
     * A map of tuples with error name and `ValidatorFn` for each parameter of getUser
     * that does not have an own model.
     */
    export const ParamValidators: {[K in keyof GetUser.PartialParamMap]?: [string, ValidatorFn][]} = {
      dbId: [
              ['required', Validators.required],
      ],
    };
}

/**
 * Namespace for getUserByAFId.
 */
export namespace GetUserByAFId {
    /**
     * Parameter map for getUserByAFId.
     */
    export interface PartialParamMap {
      /**
       * external database product id
       */
      linkId: number;
    }

    /**
     * Enumeration of all parameters for getUserByAFId.
     */
    export enum Parameters {
      /**
       * external database product id
       */
      linkId = 'linkId'
    }

    /**
     * A map of tuples with error name and `ValidatorFn` for each parameter of getUserByAFId
     * that does not have an own model.
     */
    export const ParamValidators: {[K in keyof GetUserByAFId.PartialParamMap]?: [string, ValidatorFn][]} = {
      linkId: [
              ['required', Validators.required],
      ],
    };
}

/**
 * Namespace for listUsers.
 */
export namespace ListUsers {
    /**
     * Parameter map for listUsers.
     */
    export interface PartialParamMap {
      /**
       * sort order ASC or DESC
       */
      sort?: any;
      /**
       * query limit
       */
      limit?: number;
      /**
       * query offset
       */
      offset?: number;
    }

    /**
     * Enumeration of all parameters for listUsers.
     */
    export enum Parameters {
      /**
       * sort order ASC or DESC
       */
      sort = 'sort',
      /**
       * query limit
       */
      limit = 'limit',
      /**
       * query offset
       */
      offset = 'offset'
    }

    /**
     * A map of tuples with error name and `ValidatorFn` for each parameter of listUsers
     * that does not have an own model.
     */
    export const ParamValidators: {[K in keyof ListUsers.PartialParamMap]?: [string, ValidatorFn][]} = {
      sort: [
      ],
      limit: [
      ],
      offset: [
      ],
    };
}

/**
 * Namespace for postUser.
 */
export namespace PostUser {
    /**
     * Parameter map for postUser.
     */
    export interface PartialParamMap {
      ChainUser: ChainUser;
    }

    /**
     * Enumeration of all parameters for postUser.
     */
    export enum Parameters {
      ChainUser = 'ChainUser'
    }

    /**
     * A map of tuples with error name and `ValidatorFn` for each parameter of postUser
     * that does not have an own model.
     */
    export const ParamValidators: {[K in keyof PostUser.PartialParamMap]?: [string, ValidatorFn][]} = {
    };
}

/**
 * Namespace for usersForIds.
 */
export namespace UsersForIds {
    /**
     * Parameter map for usersForIds.
     */
    export interface PartialParamMap {
      /**
       * list of external ids
       */
      request_body: Array<number>;
    }

    /**
     * Enumeration of all parameters for usersForIds.
     */
    export enum Parameters {
      /**
       * list of external ids
       */
      request_body = 'request_body'
    }

    /**
     * A map of tuples with error name and `ValidatorFn` for each parameter of usersForIds
     * that does not have an own model.
     */
    export const ParamValidators: {[K in keyof UsersForIds.PartialParamMap]?: [string, ValidatorFn][]} = {
      request_body: [
              ['required', Validators.required],
      ],
    };
}



@Injectable({
  providedIn: 'root'
})
export class UserService {

    protected basePath = 'http://localhost';
    public defaultHeaders = new HttpHeaders();
    public configuration = new Configuration();

    constructor(protected httpClient: HttpClient, @Optional()@Inject(BASE_PATH) basePath: string, @Optional() configuration: Configuration) {

        if (configuration) {
            this.configuration = configuration;
            this.configuration.basePath = configuration.basePath != null ? configuration.basePath : (basePath != null ? basePath : this.basePath);
        } else {
            this.configuration.basePath = basePath != null ? basePath : this.basePath;
        }
    }

    /**
     * @param consumes string[] mime-types
     * @return true: consumes contains 'multipart/form-data', false: otherwise
     */
    private canConsumeForm(consumes: string[]): boolean {
        const form = 'multipart/form-data';
        for (const consume of consumes) {
            if (form === consume) {
                return true;
            }
        }
        return false;
    }



  /**
   *  by map.
   * Fetches user by its _id.
   * @param map parameters map to set partial amount of parameters easily
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public getUserByMap(
    map: GetUser.PartialParamMap,
    observe?: 'body',
    reportProgress?: boolean): Observable<ApiResponseChainUser>;
  public getUserByMap(
    map: GetUser.PartialParamMap,
    observe?: 'response',
    reportProgress?: boolean): Observable<HttpResponse<ApiResponseChainUser>>;
  public getUserByMap(
    map: GetUser.PartialParamMap,
    observe?: 'events',
    reportProgress?: boolean): Observable<HttpEvent<ApiResponseChainUser>>;
  public getUserByMap(
    map: GetUser.PartialParamMap,
    observe: any = 'body',
    reportProgress: boolean = false): Observable<any> {
    return this.getUser(
      map.dbId,
      observe,
      reportProgress
    );
  }


    /**
     * 
     * Fetches user by its _id.
     * @param dbId database id of the product
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getUser(dbId: string, observe?: 'body', reportProgress?: boolean, additionalHeaders?: Array<Array<string>>): Observable<ApiResponseChainUser>;
    public getUser(dbId: string, observe?: 'response', reportProgress?: boolean, additionalHeaders?: Array<Array<string>>): Observable<HttpResponse<ApiResponseChainUser>>;
    public getUser(dbId: string, observe?: 'events', reportProgress?: boolean, additionalHeaders?: Array<Array<string>>): Observable<HttpEvent<ApiResponseChainUser>>;
    public getUser(dbId: string, observe: any = 'body', reportProgress: boolean = false, additionalHeaders?: Array<Array<string>>): Observable<any> {
        if (dbId === null || dbId === undefined) {
            throw new Error('Required parameter dbId was null or undefined when calling getUser.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

            if (additionalHeaders) {
                for(let pair of additionalHeaders) {
                    headers = headers.set(pair[0], pair[1]);
                }
            }

        const handle = this.httpClient.get<ApiResponseChainUser>(`${this.configuration.basePath}/chain-api/data/user/${encodeURIComponent(String(dbId))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
        if(typeof this.configuration.errorHandler === 'function') {
          return handle.pipe(catchError(err => this.configuration.errorHandler(err, 'GetUser')));
        }
        return handle;
    }


  /**
   *  by map.
   * Returns user according to external database id.
   * @param map parameters map to set partial amount of parameters easily
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public getUserByAFIdByMap(
    map: GetUserByAFId.PartialParamMap,
    observe?: 'body',
    reportProgress?: boolean): Observable<ApiResponseChainUser>;
  public getUserByAFIdByMap(
    map: GetUserByAFId.PartialParamMap,
    observe?: 'response',
    reportProgress?: boolean): Observable<HttpResponse<ApiResponseChainUser>>;
  public getUserByAFIdByMap(
    map: GetUserByAFId.PartialParamMap,
    observe?: 'events',
    reportProgress?: boolean): Observable<HttpEvent<ApiResponseChainUser>>;
  public getUserByAFIdByMap(
    map: GetUserByAFId.PartialParamMap,
    observe: any = 'body',
    reportProgress: boolean = false): Observable<any> {
    return this.getUserByAFId(
      map.linkId,
      observe,
      reportProgress
    );
  }


    /**
     * 
     * Returns user according to external database id.
     * @param linkId external database product id
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getUserByAFId(linkId: number, observe?: 'body', reportProgress?: boolean, additionalHeaders?: Array<Array<string>>): Observable<ApiResponseChainUser>;
    public getUserByAFId(linkId: number, observe?: 'response', reportProgress?: boolean, additionalHeaders?: Array<Array<string>>): Observable<HttpResponse<ApiResponseChainUser>>;
    public getUserByAFId(linkId: number, observe?: 'events', reportProgress?: boolean, additionalHeaders?: Array<Array<string>>): Observable<HttpEvent<ApiResponseChainUser>>;
    public getUserByAFId(linkId: number, observe: any = 'body', reportProgress: boolean = false, additionalHeaders?: Array<Array<string>>): Observable<any> {
        if (linkId === null || linkId === undefined) {
            throw new Error('Required parameter linkId was null or undefined when calling getUserByAFId.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

            if (additionalHeaders) {
                for(let pair of additionalHeaders) {
                    headers = headers.set(pair[0], pair[1]);
                }
            }

        const handle = this.httpClient.get<ApiResponseChainUser>(`${this.configuration.basePath}/chain-api/data/user/external/${encodeURIComponent(String(linkId))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
        if(typeof this.configuration.errorHandler === 'function') {
          return handle.pipe(catchError(err => this.configuration.errorHandler(err, 'GetUserByAFId')));
        }
        return handle;
    }


  /**
   *  by map.
   * Paginated list of users.
   * @param map parameters map to set partial amount of parameters easily
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public listUsersByMap(
    map: ListUsers.PartialParamMap,
    observe?: 'body',
    reportProgress?: boolean): Observable<ApiResponsePaginatedListChainUser>;
  public listUsersByMap(
    map: ListUsers.PartialParamMap,
    observe?: 'response',
    reportProgress?: boolean): Observable<HttpResponse<ApiResponsePaginatedListChainUser>>;
  public listUsersByMap(
    map: ListUsers.PartialParamMap,
    observe?: 'events',
    reportProgress?: boolean): Observable<HttpEvent<ApiResponsePaginatedListChainUser>>;
  public listUsersByMap(
    map: ListUsers.PartialParamMap,
    observe: any = 'body',
    reportProgress: boolean = false): Observable<any> {
    return this.listUsers(
      map.sort,
      map.limit,
      map.offset,
      observe,
      reportProgress
    );
  }


    /**
     * 
     * Paginated list of users.
     * @param sort sort order ASC or DESC
     * @param limit query limit
     * @param offset query offset
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public listUsers(sort?: any, limit?: number, offset?: number, observe?: 'body', reportProgress?: boolean, additionalHeaders?: Array<Array<string>>): Observable<ApiResponsePaginatedListChainUser>;
    public listUsers(sort?: any, limit?: number, offset?: number, observe?: 'response', reportProgress?: boolean, additionalHeaders?: Array<Array<string>>): Observable<HttpResponse<ApiResponsePaginatedListChainUser>>;
    public listUsers(sort?: any, limit?: number, offset?: number, observe?: 'events', reportProgress?: boolean, additionalHeaders?: Array<Array<string>>): Observable<HttpEvent<ApiResponsePaginatedListChainUser>>;
    public listUsers(sort?: any, limit?: number, offset?: number, observe: any = 'body', reportProgress: boolean = false, additionalHeaders?: Array<Array<string>>): Observable<any> {

        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (sort !== undefined && sort !== null) {
            queryParameters = queryParameters.set('sort', <any>sort);
        }
        if (limit !== undefined && limit !== null) {
            queryParameters = queryParameters.set('limit', <any>limit);
        }
        if (offset !== undefined && offset !== null) {
            queryParameters = queryParameters.set('offset', <any>offset);
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

            if (additionalHeaders) {
                for(let pair of additionalHeaders) {
                    headers = headers.set(pair[0], pair[1]);
                }
            }

        const handle = this.httpClient.get<ApiResponsePaginatedListChainUser>(`${this.configuration.basePath}/chain-api/data/user/list`,
            {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
        if(typeof this.configuration.errorHandler === 'function') {
          return handle.pipe(catchError(err => this.configuration.errorHandler(err, 'ListUsers')));
        }
        return handle;
    }


  /**
   *  by map.
   * Inserts or updates a user. When inserting fields _id, _rev and docType should not be present.
   * @param map parameters map to set partial amount of parameters easily
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public postUserByMap(
    map: PostUser.PartialParamMap,
    observe?: 'body',
    reportProgress?: boolean): Observable<ApiResponseAny>;
  public postUserByMap(
    map: PostUser.PartialParamMap,
    observe?: 'response',
    reportProgress?: boolean): Observable<HttpResponse<ApiResponseAny>>;
  public postUserByMap(
    map: PostUser.PartialParamMap,
    observe?: 'events',
    reportProgress?: boolean): Observable<HttpEvent<ApiResponseAny>>;
  public postUserByMap(
    map: PostUser.PartialParamMap,
    observe: any = 'body',
    reportProgress: boolean = false): Observable<any> {
    return this.postUser(
      map.ChainUser,
      observe,
      reportProgress
    );
  }


    /**
     * 
     * Inserts or updates a user. When inserting fields _id, _rev and docType should not be present.
     * @param ChainUser 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public postUser(ChainUser: ChainUser, observe?: 'body', reportProgress?: boolean, additionalHeaders?: Array<Array<string>>): Observable<ApiResponseAny>;
    public postUser(ChainUser: ChainUser, observe?: 'response', reportProgress?: boolean, additionalHeaders?: Array<Array<string>>): Observable<HttpResponse<ApiResponseAny>>;
    public postUser(ChainUser: ChainUser, observe?: 'events', reportProgress?: boolean, additionalHeaders?: Array<Array<string>>): Observable<HttpEvent<ApiResponseAny>>;
    public postUser(ChainUser: ChainUser, observe: any = 'body', reportProgress: boolean = false, additionalHeaders?: Array<Array<string>>): Observable<any> {
        if (ChainUser === null || ChainUser === undefined) {
            throw new Error('Required parameter ChainUser was null or undefined when calling postUser.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected !== undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

            if (additionalHeaders) {
                for(let pair of additionalHeaders) {
                    headers = headers.set(pair[0], pair[1]);
                }
            }

        const handle = this.httpClient.post<ApiResponseAny>(`${this.configuration.basePath}/chain-api/data/user`,
            ChainUser,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
        if(typeof this.configuration.errorHandler === 'function') {
          return handle.pipe(catchError(err => this.configuration.errorHandler(err, 'PostUser')));
        }
        return handle;
    }


  /**
   *  by map.
   * Returns a list of users matching to the list of external ids. Warning: Id lists and response list do not necessary match in length. if invalid external id is provided in the request&#39;s list the response list is shorter.
   * @param map parameters map to set partial amount of parameters easily
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public usersForIdsByMap(
    map: UsersForIds.PartialParamMap,
    observe?: 'body',
    reportProgress?: boolean): Observable<ApiResponseAny>;
  public usersForIdsByMap(
    map: UsersForIds.PartialParamMap,
    observe?: 'response',
    reportProgress?: boolean): Observable<HttpResponse<ApiResponseAny>>;
  public usersForIdsByMap(
    map: UsersForIds.PartialParamMap,
    observe?: 'events',
    reportProgress?: boolean): Observable<HttpEvent<ApiResponseAny>>;
  public usersForIdsByMap(
    map: UsersForIds.PartialParamMap,
    observe: any = 'body',
    reportProgress: boolean = false): Observable<any> {
    return this.usersForIds(
      map.request_body,
      observe,
      reportProgress
    );
  }


    /**
     * 
     * Returns a list of users matching to the list of external ids. Warning: Id lists and response list do not necessary match in length. if invalid external id is provided in the request&#39;s list the response list is shorter.
     * @param request_body list of external ids
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public usersForIds(request_body: Array<number>, observe?: 'body', reportProgress?: boolean, additionalHeaders?: Array<Array<string>>): Observable<ApiResponseAny>;
    public usersForIds(request_body: Array<number>, observe?: 'response', reportProgress?: boolean, additionalHeaders?: Array<Array<string>>): Observable<HttpResponse<ApiResponseAny>>;
    public usersForIds(request_body: Array<number>, observe?: 'events', reportProgress?: boolean, additionalHeaders?: Array<Array<string>>): Observable<HttpEvent<ApiResponseAny>>;
    public usersForIds(request_body: Array<number>, observe: any = 'body', reportProgress: boolean = false, additionalHeaders?: Array<Array<string>>): Observable<any> {
        if (request_body === null || request_body === undefined) {
            throw new Error('Required parameter request_body was null or undefined when calling usersForIds.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected !== undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

            if (additionalHeaders) {
                for(let pair of additionalHeaders) {
                    headers = headers.set(pair[0], pair[1]);
                }
            }

        const handle = this.httpClient.post<ApiResponseAny>(`${this.configuration.basePath}/chain-api/data/user/external/list`,
            request_body,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
        if(typeof this.configuration.errorHandler === 'function') {
          return handle.pipe(catchError(err => this.configuration.errorHandler(err, 'UsersForIds')));
        }
        return handle;
    }

}