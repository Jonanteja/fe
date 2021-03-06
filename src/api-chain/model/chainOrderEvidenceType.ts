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
 * Codebook for order evidence type
 */

export interface ChainOrderEvidenceType { 
    docType?: string;
    _id?: string;
    _rev?: string;
    dbKey?: string;
    mode__?: any;
    id: string;
    label: string;
    fairness?: boolean;
    provenance?: boolean;
    quality?: boolean;
}

/**
 * Namespace for property- and property-value-enumerations of ChainOrderEvidenceType.
 */
export namespace ChainOrderEvidenceType {
    /**
     * All properties of ChainOrderEvidenceType.
     */
    export enum Properties {
        docType = 'docType',
        _id = '_id',
        _rev = '_rev',
        dbKey = 'dbKey',
        mode__ = 'mode__',
        id = 'id',
        label = 'label',
        fairness = 'fairness',
        provenance = 'provenance',
        quality = 'quality'
    }


    export function formMetadata() {
        return  {
            metadata: formMetadata,
            classname: 'ChainOrderEvidenceType',
            vars: [
                {
                    isReadOnly: false,
                    isEnum: false,
                    required: false,
                    name: 'docType',
                    classname: 'ChainOrderEvidenceType',
                    dataType: 'string',
                    isPrimitiveType: true,
                    isListContainer: false,
                    complexType: ''
                },
                {
                    isReadOnly: false,
                    isEnum: false,
                    required: false,
                    name: '_id',
                    classname: 'ChainOrderEvidenceType',
                    dataType: 'string',
                    isPrimitiveType: true,
                    isListContainer: false,
                    complexType: ''
                },
                {
                    isReadOnly: false,
                    isEnum: false,
                    required: false,
                    name: '_rev',
                    classname: 'ChainOrderEvidenceType',
                    dataType: 'string',
                    isPrimitiveType: true,
                    isListContainer: false,
                    complexType: ''
                },
                {
                    isReadOnly: false,
                    isEnum: false,
                    required: false,
                    name: 'dbKey',
                    classname: 'ChainOrderEvidenceType',
                    dataType: 'string',
                    isPrimitiveType: true,
                    isListContainer: false,
                    complexType: ''
                },
                {
                    isReadOnly: false,
                    isEnum: false,
                    required: false,
                    name: 'mode__',
                    classname: 'ChainOrderEvidenceType',
                    dataType: 'any',
                    isPrimitiveType: true,
                    isListContainer: false,
                    complexType: ''
                },
                {
                    isReadOnly: false,
                    isEnum: false,
                    required: true,
                    name: 'id',
                    classname: 'ChainOrderEvidenceType',
                    dataType: 'string',
                    isPrimitiveType: true,
                    isListContainer: false,
                    complexType: ''
                },
                {
                    isReadOnly: false,
                    isEnum: false,
                    required: true,
                    name: 'label',
                    classname: 'ChainOrderEvidenceType',
                    dataType: 'string',
                    isPrimitiveType: true,
                    isListContainer: false,
                    complexType: ''
                },
                {
                    isReadOnly: false,
                    isEnum: false,
                    required: false,
                    name: 'fairness',
                    classname: 'ChainOrderEvidenceType',
                    dataType: 'boolean',
                    isPrimitiveType: true,
                    isListContainer: false,
                    complexType: ''
                },
                {
                    isReadOnly: false,
                    isEnum: false,
                    required: false,
                    name: 'provenance',
                    classname: 'ChainOrderEvidenceType',
                    dataType: 'boolean',
                    isPrimitiveType: true,
                    isListContainer: false,
                    complexType: ''
                },
                {
                    isReadOnly: false,
                    isEnum: false,
                    required: false,
                    name: 'quality',
                    classname: 'ChainOrderEvidenceType',
                    dataType: 'boolean',
                    isPrimitiveType: true,
                    isListContainer: false,
                    complexType: ''
                },
            ],
            validators: {
                docType: [
                ],
                _id: [
                ],
                _rev: [
                ],
                dbKey: [
                ],
                mode__: [
                ],
                id: [
                        ['required'],
                ],
                label: [
                        ['required'],
                ],
                fairness: [
                ],
                provenance: [
                ],
                quality: [
                ],
            }
        }
    }

  // export const ChainOrderEvidenceTypeValidationScheme = {
  //     validators: [],
  //     fields: {
  //               docType: {
  //                   validators: []
  //               },
  //               _id: {
  //                   validators: []
  //               },
  //               _rev: {
  //                   validators: []
  //               },
  //               dbKey: {
  //                   validators: []
  //               },
  //               mode__: {
  //                   validators: []
  //               },
  //               id: {
  //                   validators: []
  //               },
  //               label: {
  //                   validators: []
  //               },
  //               fairness: {
  //                   validators: []
  //               },
  //               provenance: {
  //                   validators: []
  //               },
  //               quality: {
  //                   validators: []
  //               },
  //     }
  // } as SimpleValidationScheme<ChainOrderEvidenceType>;


}


