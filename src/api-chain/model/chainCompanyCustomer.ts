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


import { ChainLocation } from './chainLocation';
import { ChainSemiProductDatePriceAtCompanyCustomer } from './chainSemiProductDatePriceAtCompanyCustomer';


/**
 * Company (legal person) type customer
 */

export interface ChainCompanyCustomer { 
    docType?: string;
    _id?: string;
    _rev?: string;
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
     * Custemor id from af-coffee-ap database RENAME IT FOR NOW (until Java api is fix)
     */
    cccid?: number;
    /**
     * Product Id as in af-coffee database
     */
    productId: number;
    /**
     * Company Id as in af-coffee database
     */
    companyId: number;
    /**
     * Type of company customer;
     */
    type: any;
    /**
     * Organization id. Set automatically from companyId;
     */
    organizationId?: string;
    /**
     * Product id in chain database. Set automatically from productId.
     */
    chainProductId?: string;
    /**
     * Contact
     */
    contact?: string;
    /**
     * Email
     */
    email?: string;
    location?: ChainLocation;
    /**
     * Name
     */
    name?: string;
    /**
     * Official company name
     */
    officialCompanyName?: string;
    /**
     * Phone
     */
    phone?: string;
    /**
     * Vat id
     */
    vatId?: string;
    /**
     * Vat id
     */
    semiProductPrices?: Array<ChainSemiProductDatePriceAtCompanyCustomer>;
}

/**
 * Namespace for property- and property-value-enumerations of ChainCompanyCustomer.
 */
export namespace ChainCompanyCustomer {
    /**
     * All properties of ChainCompanyCustomer.
     */
    export enum Properties {
        docType = 'docType',
        _id = '_id',
        _rev = '_rev',
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
         * Custemor id from af-coffee-ap database RENAME IT FOR NOW (until Java api is fix)
         */
        cccid = 'cccid',
        /**
         * Product Id as in af-coffee database
         */
        productId = 'productId',
        /**
         * Company Id as in af-coffee database
         */
        companyId = 'companyId',
        /**
         * Type of company customer;
         */
        type = 'type',
        /**
         * Organization id. Set automatically from companyId;
         */
        organizationId = 'organizationId',
        /**
         * Product id in chain database. Set automatically from productId.
         */
        chainProductId = 'chainProductId',
        /**
         * Contact
         */
        contact = 'contact',
        /**
         * Email
         */
        email = 'email',
        location = 'location',
        /**
         * Name
         */
        name = 'name',
        /**
         * Official company name
         */
        officialCompanyName = 'officialCompanyName',
        /**
         * Phone
         */
        phone = 'phone',
        /**
         * Vat id
         */
        vatId = 'vatId',
        /**
         * Vat id
         */
        semiProductPrices = 'semiProductPrices'
    }


    export function formMetadata() {
        return  {
            metadata: formMetadata,
            classname: 'ChainCompanyCustomer',
            vars: [
                {
                    isReadOnly: false,
                    isEnum: false,
                    required: false,
                    name: 'docType',
                    classname: 'ChainCompanyCustomer',
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
                    classname: 'ChainCompanyCustomer',
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
                    classname: 'ChainCompanyCustomer',
                    dataType: 'string',
                    isPrimitiveType: true,
                    isListContainer: false,
                    complexType: ''
                },
                {
                    isReadOnly: false,
                    isEnum: false,
                    required: false,
                    name: 'created',
                    classname: 'ChainCompanyCustomer',
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
                    classname: 'ChainCompanyCustomer',
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
                    classname: 'ChainCompanyCustomer',
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
                    classname: 'ChainCompanyCustomer',
                    dataType: 'string',
                    isPrimitiveType: true,
                    isListContainer: false,
                    complexType: ''
                },
                {
                    isReadOnly: false,
                    isEnum: false,
                    required: false,
                    name: 'cccid',
                    classname: 'ChainCompanyCustomer',
                    dataType: 'number',
                    isPrimitiveType: true,
                    isListContainer: false,
                    complexType: ''
                },
                {
                    isReadOnly: false,
                    isEnum: false,
                    required: true,
                    name: 'productId',
                    classname: 'ChainCompanyCustomer',
                    dataType: 'number',
                    isPrimitiveType: true,
                    isListContainer: false,
                    complexType: ''
                },
                {
                    isReadOnly: false,
                    isEnum: false,
                    required: true,
                    name: 'companyId',
                    classname: 'ChainCompanyCustomer',
                    dataType: 'number',
                    isPrimitiveType: true,
                    isListContainer: false,
                    complexType: ''
                },
                {
                    isReadOnly: false,
                    isEnum: false,
                    required: true,
                    name: 'type',
                    classname: 'ChainCompanyCustomer',
                    dataType: 'any',
                    isPrimitiveType: true,
                    isListContainer: false,
                    complexType: ''
                },
                {
                    isReadOnly: false,
                    isEnum: false,
                    required: false,
                    name: 'organizationId',
                    classname: 'ChainCompanyCustomer',
                    dataType: 'string',
                    isPrimitiveType: true,
                    isListContainer: false,
                    complexType: ''
                },
                {
                    isReadOnly: false,
                    isEnum: false,
                    required: false,
                    name: 'chainProductId',
                    classname: 'ChainCompanyCustomer',
                    dataType: 'string',
                    isPrimitiveType: true,
                    isListContainer: false,
                    complexType: ''
                },
                {
                    isReadOnly: false,
                    isEnum: false,
                    required: false,
                    name: 'contact',
                    classname: 'ChainCompanyCustomer',
                    dataType: 'string',
                    isPrimitiveType: true,
                    isListContainer: false,
                    complexType: ''
                },
                {
                    isReadOnly: false,
                    isEnum: false,
                    required: false,
                    name: 'email',
                    classname: 'ChainCompanyCustomer',
                    dataType: 'string',
                    isPrimitiveType: true,
                    isListContainer: false,
                    complexType: ''
                },
                {
                    metadata: ChainLocation.formMetadata,
                    isReadOnly: false,
                    isEnum: false,
                    required: false,
                    name: 'location',
                    classname: 'ChainCompanyCustomer',
                    dataType: 'ChainLocation',
                    isPrimitiveType: false,
                    isListContainer: false,
                    complexType: 'ChainLocation'
                },
                {
                    isReadOnly: false,
                    isEnum: false,
                    required: false,
                    name: 'name',
                    classname: 'ChainCompanyCustomer',
                    dataType: 'string',
                    isPrimitiveType: true,
                    isListContainer: false,
                    complexType: ''
                },
                {
                    isReadOnly: false,
                    isEnum: false,
                    required: false,
                    name: 'officialCompanyName',
                    classname: 'ChainCompanyCustomer',
                    dataType: 'string',
                    isPrimitiveType: true,
                    isListContainer: false,
                    complexType: ''
                },
                {
                    isReadOnly: false,
                    isEnum: false,
                    required: false,
                    name: 'phone',
                    classname: 'ChainCompanyCustomer',
                    dataType: 'string',
                    isPrimitiveType: true,
                    isListContainer: false,
                    complexType: ''
                },
                {
                    isReadOnly: false,
                    isEnum: false,
                    required: false,
                    name: 'vatId',
                    classname: 'ChainCompanyCustomer',
                    dataType: 'string',
                    isPrimitiveType: true,
                    isListContainer: false,
                    complexType: ''
                },
                {
                    metadata: ChainSemiProductDatePriceAtCompanyCustomer.formMetadata,
                    isReadOnly: false,
                    isEnum: false,
                    required: false,
                    name: 'semiProductPrices',
                    classname: 'ChainCompanyCustomer',
                    dataType: 'Array&lt;ChainSemiProductDatePriceAtCompanyCustomer&gt;',
                    isPrimitiveType: false,
                    isListContainer: true,
                    complexType: 'ChainSemiProductDatePriceAtCompanyCustomer'
                },
            ],
            validators: {
                docType: [
                ],
                _id: [
                ],
                _rev: [
                ],
                created: [
                ],
                lastChange: [
                ],
                userCreatedId: [
                ],
                userChangedId: [
                ],
                cccid: [
                ],
                productId: [
                        ['required'],
                ],
                companyId: [
                        ['required'],
                ],
                type: [
                        ['required'],
                ],
                organizationId: [
                ],
                chainProductId: [
                ],
                contact: [
                ],
                email: [
                ],
                location: [
                ],
                name: [
                ],
                officialCompanyName: [
                ],
                phone: [
                ],
                vatId: [
                ],
                semiProductPrices: [
                ],
            }
        }
    }

  // export const ChainCompanyCustomerValidationScheme = {
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
  //               cccid: {
  //                   validators: []
  //               },
  //               productId: {
  //                   validators: []
  //               },
  //               companyId: {
  //                   validators: []
  //               },
  //               type: {
  //                   validators: []
  //               },
  //               organizationId: {
  //                   validators: []
  //               },
  //               chainProductId: {
  //                   validators: []
  //               },
  //               contact: {
  //                   validators: []
  //               },
  //               email: {
  //                   validators: []
  //               },
  //               location: {
  //                   validators: []
  //               },
  //               name: {
  //                   validators: []
  //               },
  //               officialCompanyName: {
  //                   validators: []
  //               },
  //               phone: {
  //                   validators: []
  //               },
  //               vatId: {
  //                   validators: []
  //               },
  //               semiProductPrices: {
  //                   validators: []
  //               },
  //     }
  // } as SimpleValidationScheme<ChainCompanyCustomer>;


}

