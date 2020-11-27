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


import { ChainGradeAbbreviation } from './chainGradeAbbreviation';



export interface PaginatedListChainGradeAbbreviation { 
    /**
     * Count of all items satisfying 'paginatable' request.
     */
    count?: number;
    /**
     * Response items.
     */
    items?: Array<ChainGradeAbbreviation>;
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
 * Namespace for property- and property-value-enumerations of PaginatedListChainGradeAbbreviation.
 */
export namespace PaginatedListChainGradeAbbreviation {
    /**
     * All properties of PaginatedListChainGradeAbbreviation.
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
            classname: 'PaginatedListChainGradeAbbreviation',
            vars: [
                {
                    isReadOnly: false,
                    isEnum: false,
                    required: false,
                    name: 'count',
                    classname: 'PaginatedListChainGradeAbbreviation',
                    dataType: 'number',
                    isPrimitiveType: true,
                    isListContainer: false,
                    complexType: ''
                },
                {
                    metadata: ChainGradeAbbreviation.formMetadata,
                    isReadOnly: false,
                    isEnum: false,
                    required: false,
                    name: 'items',
                    classname: 'PaginatedListChainGradeAbbreviation',
                    dataType: 'Array&lt;ChainGradeAbbreviation&gt;',
                    isPrimitiveType: false,
                    isListContainer: true,
                    complexType: 'ChainGradeAbbreviation'
                },
                {
                    isReadOnly: false,
                    isEnum: false,
                    required: false,
                    name: 'limit',
                    classname: 'PaginatedListChainGradeAbbreviation',
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
                    classname: 'PaginatedListChainGradeAbbreviation',
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

  // export const PaginatedListChainGradeAbbreviationValidationScheme = {
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
  // } as SimpleValidationScheme<PaginatedListChainGradeAbbreviation>;


}

