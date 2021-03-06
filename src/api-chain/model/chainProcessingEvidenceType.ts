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
 * Codebook for processing evidence type
 */

export interface ChainProcessingEvidenceType { 
    docType?: string;
    _id?: string;
    _rev?: string;
    dbKey?: string;
    mode__?: any;
    /**
     * Timestamp of creation
     */
    created?: string;
    /**
     * Timestamp of last change
     */
    lastChange?: string;
    /**
     * Id of user that created the document.
     */
    userCreatedId?: string;
    /**
     * Id of user that changed the document.
     */
    userChangedId?: string;
    /**
     * capitalized underscored string that defines the document requirement
     */
    id: string;
    /**
     * Default english label
     */
    label: string;
    /**
     * Type of evidence type. DOCUMENT is prescribed (date, type, document). FIELD is any other. Some others can be added.
     */
    type?: any;
    /**
     * Whether the evidence is of fairness type
     */
    fairness?: boolean;
    /**
     * Whether the evidence is of provenance type
     */
    provenance?: boolean;
    /**
     * Whether the evidence is of quality type
     */
    quality?: boolean;
    /**
     * Whether the evidence is required (not used for settings, just in transformations)
     */
    required?: boolean;
    /**
     * Whether the evidence is required on quote (not used for settings, just in transformations)
     */
    requiredOnQuote?: boolean;
    /**
     * Defines a group in which at least one document has to be provided (is required)
     */
    requiredOneOfGroupIdForQuote?: string;
}

/**
 * Namespace for property- and property-value-enumerations of ChainProcessingEvidenceType.
 */
export namespace ChainProcessingEvidenceType {
    /**
     * All properties of ChainProcessingEvidenceType.
     */
    export enum Properties {
        docType = 'docType',
        _id = '_id',
        _rev = '_rev',
        dbKey = 'dbKey',
        mode__ = 'mode__',
        /**
         * Timestamp of creation
         */
        created = 'created',
        /**
         * Timestamp of last change
         */
        lastChange = 'lastChange',
        /**
         * Id of user that created the document.
         */
        userCreatedId = 'userCreatedId',
        /**
         * Id of user that changed the document.
         */
        userChangedId = 'userChangedId',
        /**
         * capitalized underscored string that defines the document requirement
         */
        id = 'id',
        /**
         * Default english label
         */
        label = 'label',
        /**
         * Type of evidence type. DOCUMENT is prescribed (date, type, document). FIELD is any other. Some others can be added.
         */
        type = 'type',
        /**
         * Whether the evidence is of fairness type
         */
        fairness = 'fairness',
        /**
         * Whether the evidence is of provenance type
         */
        provenance = 'provenance',
        /**
         * Whether the evidence is of quality type
         */
        quality = 'quality',
        /**
         * Whether the evidence is required (not used for settings, just in transformations)
         */
        required = 'required',
        /**
         * Whether the evidence is required on quote (not used for settings, just in transformations)
         */
        requiredOnQuote = 'requiredOnQuote',
        /**
         * Defines a group in which at least one document has to be provided (is required)
         */
        requiredOneOfGroupIdForQuote = 'requiredOneOfGroupIdForQuote'
    }


    export function formMetadata() {
        return  {
            metadata: formMetadata,
            classname: 'ChainProcessingEvidenceType',
            vars: [
                {
                    isReadOnly: false,
                    isEnum: false,
                    required: false,
                    name: 'docType',
                    classname: 'ChainProcessingEvidenceType',
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
                    classname: 'ChainProcessingEvidenceType',
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
                    classname: 'ChainProcessingEvidenceType',
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
                    classname: 'ChainProcessingEvidenceType',
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
                    classname: 'ChainProcessingEvidenceType',
                    dataType: 'any',
                    isPrimitiveType: true,
                    isListContainer: false,
                    complexType: ''
                },
                {
                    isReadOnly: false,
                    isEnum: false,
                    required: false,
                    name: 'created',
                    classname: 'ChainProcessingEvidenceType',
                    dataType: 'string',
                    isPrimitiveType: true,
                    isListContainer: false,
                    complexType: ''
                },
                {
                    isReadOnly: false,
                    isEnum: false,
                    required: false,
                    name: 'lastChange',
                    classname: 'ChainProcessingEvidenceType',
                    dataType: 'string',
                    isPrimitiveType: true,
                    isListContainer: false,
                    complexType: ''
                },
                {
                    isReadOnly: false,
                    isEnum: false,
                    required: false,
                    name: 'userCreatedId',
                    classname: 'ChainProcessingEvidenceType',
                    dataType: 'string',
                    isPrimitiveType: true,
                    isListContainer: false,
                    complexType: ''
                },
                {
                    isReadOnly: false,
                    isEnum: false,
                    required: false,
                    name: 'userChangedId',
                    classname: 'ChainProcessingEvidenceType',
                    dataType: 'string',
                    isPrimitiveType: true,
                    isListContainer: false,
                    complexType: ''
                },
                {
                    isReadOnly: false,
                    isEnum: false,
                    required: true,
                    name: 'id',
                    classname: 'ChainProcessingEvidenceType',
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
                    classname: 'ChainProcessingEvidenceType',
                    dataType: 'string',
                    isPrimitiveType: true,
                    isListContainer: false,
                    complexType: ''
                },
                {
                    isReadOnly: false,
                    isEnum: false,
                    required: false,
                    name: 'type',
                    classname: 'ChainProcessingEvidenceType',
                    dataType: 'any',
                    isPrimitiveType: true,
                    isListContainer: false,
                    complexType: ''
                },
                {
                    isReadOnly: false,
                    isEnum: false,
                    required: false,
                    name: 'fairness',
                    classname: 'ChainProcessingEvidenceType',
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
                    classname: 'ChainProcessingEvidenceType',
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
                    classname: 'ChainProcessingEvidenceType',
                    dataType: 'boolean',
                    isPrimitiveType: true,
                    isListContainer: false,
                    complexType: ''
                },
                {
                    isReadOnly: false,
                    isEnum: false,
                    required: false,
                    name: 'required',
                    classname: 'ChainProcessingEvidenceType',
                    dataType: 'boolean',
                    isPrimitiveType: true,
                    isListContainer: false,
                    complexType: ''
                },
                {
                    isReadOnly: false,
                    isEnum: false,
                    required: false,
                    name: 'requiredOnQuote',
                    classname: 'ChainProcessingEvidenceType',
                    dataType: 'boolean',
                    isPrimitiveType: true,
                    isListContainer: false,
                    complexType: ''
                },
                {
                    isReadOnly: false,
                    isEnum: false,
                    required: false,
                    name: 'requiredOneOfGroupIdForQuote',
                    classname: 'ChainProcessingEvidenceType',
                    dataType: 'string',
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
                created: [
                ],
                lastChange: [
                ],
                userCreatedId: [
                ],
                userChangedId: [
                ],
                id: [
                        ['required'],
                ],
                label: [
                        ['required'],
                ],
                type: [
                ],
                fairness: [
                ],
                provenance: [
                ],
                quality: [
                ],
                required: [
                ],
                requiredOnQuote: [
                ],
                requiredOneOfGroupIdForQuote: [
                ],
            }
        }
    }

  // export const ChainProcessingEvidenceTypeValidationScheme = {
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
  //               created: {
  //                   validators: []
  //               },
  //               lastChange: {
  //                   validators: []
  //               },
  //               userCreatedId: {
  //                   validators: []
  //               },
  //               userChangedId: {
  //                   validators: []
  //               },
  //               id: {
  //                   validators: []
  //               },
  //               label: {
  //                   validators: []
  //               },
  //               type: {
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
  //               required: {
  //                   validators: []
  //               },
  //               requiredOnQuote: {
  //                   validators: []
  //               },
  //               requiredOneOfGroupIdForQuote: {
  //                   validators: []
  //               },
  //     }
  // } as SimpleValidationScheme<ChainProcessingEvidenceType>;


}


