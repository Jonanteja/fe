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




/**
 * Describes some data about a farm of a customer.
 */

export interface FarmInfo { 
    /**
     * Whether a user customer owns a farm.
     */
    ownsFarm?: boolean;
    /**
     * Farm size
     */
    farmSize?: string;
    /**
     * Number of trees
     */
    numberOfTrees?: number;
    /**
     * True if it is an organic farm
     */
    organicFarm?: boolean;
    /**
     * Fertilizer used description.
     */
    fertilizerDescription?: string;
    /**
     * Any additional info.
     */
    additionalInfo?: string;
}

/**
 * Namespace for property- and property-value-enumerations of FarmInfo.
 */
export namespace FarmInfo {
    /**
     * All properties of FarmInfo.
     */
    export enum Properties {
        /**
         * Whether a user customer owns a farm.
         */
        ownsFarm = 'ownsFarm',
        /**
         * Farm size
         */
        farmSize = 'farmSize',
        /**
         * Number of trees
         */
        numberOfTrees = 'numberOfTrees',
        /**
         * True if it is an organic farm
         */
        organicFarm = 'organicFarm',
        /**
         * Fertilizer used description.
         */
        fertilizerDescription = 'fertilizerDescription',
        /**
         * Any additional info.
         */
        additionalInfo = 'additionalInfo'
    }


    export function formMetadata() {
        return  {
            metadata: formMetadata,
            classname: 'FarmInfo',
            vars: [
                {
                    isReadOnly: false,
                    isEnum: false,
                    required: false,
                    name: 'ownsFarm',
                    classname: 'FarmInfo',
                    dataType: 'boolean',
                    isPrimitiveType: true,
                    isListContainer: false,
                    complexType: ''
                },
                {
                    isReadOnly: false,
                    isEnum: false,
                    required: false,
                    name: 'farmSize',
                    classname: 'FarmInfo',
                    dataType: 'string',
                    isPrimitiveType: true,
                    isListContainer: false,
                    complexType: ''
                },
                {
                    isReadOnly: false,
                    isEnum: false,
                    required: false,
                    name: 'numberOfTrees',
                    classname: 'FarmInfo',
                    dataType: 'number',
                    isPrimitiveType: true,
                    isListContainer: false,
                    complexType: ''
                },
                {
                    isReadOnly: false,
                    isEnum: false,
                    required: false,
                    name: 'organicFarm',
                    classname: 'FarmInfo',
                    dataType: 'boolean',
                    isPrimitiveType: true,
                    isListContainer: false,
                    complexType: ''
                },
                {
                    isReadOnly: false,
                    isEnum: false,
                    required: false,
                    name: 'fertilizerDescription',
                    classname: 'FarmInfo',
                    dataType: 'string',
                    isPrimitiveType: true,
                    isListContainer: false,
                    complexType: ''
                },
                {
                    isReadOnly: false,
                    isEnum: false,
                    required: false,
                    name: 'additionalInfo',
                    classname: 'FarmInfo',
                    dataType: 'string',
                    isPrimitiveType: true,
                    isListContainer: false,
                    complexType: ''
                },
            ],
            validators: {
                ownsFarm: [
                ],
                farmSize: [
                ],
                numberOfTrees: [
                ],
                organicFarm: [
                ],
                fertilizerDescription: [
                ],
                additionalInfo: [
                ],
            }
        }
    }

  // export const FarmInfoValidationScheme = {
  //     validators: [],
  //     fields: {
  //               ownsFarm: {
  //                   validators: []
  //               },
  //               farmSize: {
  //                   validators: []
  //               },
  //               numberOfTrees: {
  //                   validators: []
  //               },
  //               organicFarm: {
  //                   validators: []
  //               },
  //               fertilizerDescription: {
  //                   validators: []
  //               },
  //               additionalInfo: {
  //                   validators: []
  //               },
  //     }
  // } as SimpleValidationScheme<FarmInfo>;


}

