/*
 * Copyright(c) 2009 - 2019 Abelium d.o.o.
 * Kajuhova 90, 1000 Ljubljana, Slovenia
 * All rights reserved
 * Copyright(c) 1995 - 2018 T-Systems Multimedia Solutions GmbH
 * Riesaer Str. 5, 01129 Dresden
 * All rights reserved.
 *
 * INATrace Services API
 * Abelium INATrace Services API swagger documentation
 *
 * OpenAPI spec version: 1.0
 * 
 *
 * NOTE: This class is auto generated by the openapi-typescript-angular-generator.
 * https://github.com/alenabelium/openapi-typescript-angular-generator
 * Do not edit the class manually.
 */


import { ApiKnowledgeBlogBase } from './apiKnowledgeBlogBase';



export interface ApiPaginatedListApiKnowledgeBlogBase { 
    /**
     * Count of all items satisfying 'paginatable' request.
     */
    count?: number;
    /**
     * Response items.
     */
    items?: Array<ApiKnowledgeBlogBase>;
    /**
     * Limit got from request
     */
    limit?: number;
    /**
     * Offset got from request
     */
    offset?: number;
}

/**
 * Namespace for property- and property-value-enumerations of ApiPaginatedListApiKnowledgeBlogBase.
 */
export namespace ApiPaginatedListApiKnowledgeBlogBase {
    /**
     * All properties of ApiPaginatedListApiKnowledgeBlogBase.
     */
    export enum Properties {
        /**
         * Count of all items satisfying 'paginatable' request.
         */
        count = 'count',
        /**
         * Response items.
         */
        items = 'items',
        /**
         * Limit got from request
         */
        limit = 'limit',
        /**
         * Offset got from request
         */
        offset = 'offset'
    }


    export function formMetadata() {
        return  {
            metadata: formMetadata,
            classname: 'ApiPaginatedListApiKnowledgeBlogBase',
            vars: [
                {
                    isReadOnly: false,
                    isEnum: false,
                    required: false,
                    name: 'count',
                    classname: 'ApiPaginatedListApiKnowledgeBlogBase',
                    dataType: 'number',
                    isPrimitiveType: true,
                    isListContainer: false,
                    complexType: ''
                },
                {
                    metadata: ApiKnowledgeBlogBase.formMetadata,
                    isReadOnly: false,
                    isEnum: false,
                    required: false,
                    name: 'items',
                    classname: 'ApiPaginatedListApiKnowledgeBlogBase',
                    dataType: 'Array&lt;ApiKnowledgeBlogBase&gt;',
                    isPrimitiveType: false,
                    isListContainer: true,
                    complexType: 'ApiKnowledgeBlogBase'
                },
                {
                    isReadOnly: false,
                    isEnum: false,
                    required: false,
                    name: 'limit',
                    classname: 'ApiPaginatedListApiKnowledgeBlogBase',
                    dataType: 'number',
                    isPrimitiveType: true,
                    isListContainer: false,
                    complexType: ''
                },
                {
                    isReadOnly: false,
                    isEnum: false,
                    required: false,
                    name: 'offset',
                    classname: 'ApiPaginatedListApiKnowledgeBlogBase',
                    dataType: 'number',
                    isPrimitiveType: true,
                    isListContainer: false,
                    complexType: ''
                },
            ],
            validators: {
                count: [
                ],
                items: [
                ],
                limit: [
                ],
                offset: [
                ],
            }
        }
    }

  // export const ApiPaginatedListApiKnowledgeBlogBaseValidationScheme = {
  //     validators: [],
  //     fields: {
  //               count: {
  //                   validators: []
  //               },
  //               items: {
  //                   validators: []
  //               },
  //               limit: {
  //                   validators: []
  //               },
  //               offset: {
  //                   validators: []
  //               },
  //     }
  // } as SimpleValidationScheme<ApiPaginatedListApiKnowledgeBlogBase>;


}

