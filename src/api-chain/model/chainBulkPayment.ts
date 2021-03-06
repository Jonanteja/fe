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


import { BankAccountInfo } from './bankAccountInfo';
import { ChainActivityProof } from './chainActivityProof';
import { ChainOrganization } from './chainOrganization';
import { ChainPayment } from './chainPayment';


/**
 * Chain bulk payment (when paying at the bank to multiple farmers)
 */

export interface ChainBulkPayment { 
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
     * Currency of payment
     */
    currency: string;
    /**
     * Formal creation time set while entering.
     */
    formalCreationTime: string;
    bankInfo?: BankAccountInfo;
    /**
     * Organization that is paying
     */
    payingOrganizationId: string;
    /**
     * Payment purpose type.
     */
    paymentPurposeType?: any;
    /**
     * Payment description.
     */
    paymentDescription: string;
    /**
     * Total amount of payment in currency
     */
    totalAmount: number;
    /**
     * Payment per kg in currency
     */
    paymentPerKg?: number;
    /**
     * Additional cost of payment in currency
     */
    additionalCost?: number;
    /**
     * Additional cost description.
     */
    additionalCostDescription?: string;
    /**
     * List of stockOrder ids.
     */
    stockOrderIds?: Array<string>;
    /**
     * List of additional proofs.
     */
    additionalProofs?: Array<ChainActivityProof>;
    /**
     * Receipt number
     */
    receiptNumber?: string;
    payingOrganization?: ChainOrganization;
    /**
     * List of payments.
     */
    payments?: Array<ChainPayment>;
}

/**
 * Namespace for property- and property-value-enumerations of ChainBulkPayment.
 */
export namespace ChainBulkPayment {
    /**
     * All properties of ChainBulkPayment.
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
         * Currency of payment
         */
        currency = 'currency',
        /**
         * Formal creation time set while entering.
         */
        formalCreationTime = 'formalCreationTime',
        bankInfo = 'bankInfo',
        /**
         * Organization that is paying
         */
        payingOrganizationId = 'payingOrganizationId',
        /**
         * Payment purpose type.
         */
        paymentPurposeType = 'paymentPurposeType',
        /**
         * Payment description.
         */
        paymentDescription = 'paymentDescription',
        /**
         * Total amount of payment in currency
         */
        totalAmount = 'totalAmount',
        /**
         * Payment per kg in currency
         */
        paymentPerKg = 'paymentPerKg',
        /**
         * Additional cost of payment in currency
         */
        additionalCost = 'additionalCost',
        /**
         * Additional cost description.
         */
        additionalCostDescription = 'additionalCostDescription',
        /**
         * List of stockOrder ids.
         */
        stockOrderIds = 'stockOrderIds',
        /**
         * List of additional proofs.
         */
        additionalProofs = 'additionalProofs',
        /**
         * Receipt number
         */
        receiptNumber = 'receiptNumber',
        payingOrganization = 'payingOrganization',
        /**
         * List of payments.
         */
        payments = 'payments'
    }


    export function formMetadata() {
        return  {
            metadata: formMetadata,
            classname: 'ChainBulkPayment',
            vars: [
                {
                    isReadOnly: false,
                    isEnum: false,
                    required: false,
                    name: 'docType',
                    classname: 'ChainBulkPayment',
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
                    classname: 'ChainBulkPayment',
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
                    classname: 'ChainBulkPayment',
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
                    classname: 'ChainBulkPayment',
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
                    classname: 'ChainBulkPayment',
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
                    classname: 'ChainBulkPayment',
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
                    classname: 'ChainBulkPayment',
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
                    classname: 'ChainBulkPayment',
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
                    classname: 'ChainBulkPayment',
                    dataType: 'string',
                    isPrimitiveType: true,
                    isListContainer: false,
                    complexType: ''
                },
                {
                    isReadOnly: false,
                    isEnum: false,
                    required: true,
                    name: 'currency',
                    classname: 'ChainBulkPayment',
                    dataType: 'string',
                    isPrimitiveType: true,
                    isListContainer: false,
                    complexType: ''
                },
                {
                    isReadOnly: false,
                    isEnum: false,
                    required: true,
                    name: 'formalCreationTime',
                    classname: 'ChainBulkPayment',
                    dataType: 'string',
                    isPrimitiveType: true,
                    isListContainer: false,
                    complexType: ''
                },
                {
                    metadata: BankAccountInfo.formMetadata,
                    isReadOnly: false,
                    isEnum: false,
                    required: false,
                    name: 'bankInfo',
                    classname: 'ChainBulkPayment',
                    dataType: 'BankAccountInfo',
                    isPrimitiveType: false,
                    isListContainer: false,
                    complexType: 'BankAccountInfo'
                },
                {
                    isReadOnly: false,
                    isEnum: false,
                    required: true,
                    name: 'payingOrganizationId',
                    classname: 'ChainBulkPayment',
                    dataType: 'string',
                    isPrimitiveType: true,
                    isListContainer: false,
                    complexType: ''
                },
                {
                    isReadOnly: false,
                    isEnum: false,
                    required: false,
                    name: 'paymentPurposeType',
                    classname: 'ChainBulkPayment',
                    dataType: 'any',
                    isPrimitiveType: true,
                    isListContainer: false,
                    complexType: ''
                },
                {
                    isReadOnly: false,
                    isEnum: false,
                    required: true,
                    name: 'paymentDescription',
                    classname: 'ChainBulkPayment',
                    dataType: 'string',
                    isPrimitiveType: true,
                    isListContainer: false,
                    complexType: ''
                },
                {
                    isReadOnly: false,
                    isEnum: false,
                    required: true,
                    name: 'totalAmount',
                    classname: 'ChainBulkPayment',
                    dataType: 'number',
                    isPrimitiveType: true,
                    isListContainer: false,
                    complexType: ''
                },
                {
                    isReadOnly: false,
                    isEnum: false,
                    required: false,
                    name: 'paymentPerKg',
                    classname: 'ChainBulkPayment',
                    dataType: 'number',
                    isPrimitiveType: true,
                    isListContainer: false,
                    complexType: ''
                },
                {
                    isReadOnly: false,
                    isEnum: false,
                    required: false,
                    name: 'additionalCost',
                    classname: 'ChainBulkPayment',
                    dataType: 'number',
                    isPrimitiveType: true,
                    isListContainer: false,
                    complexType: ''
                },
                {
                    isReadOnly: false,
                    isEnum: false,
                    required: false,
                    name: 'additionalCostDescription',
                    classname: 'ChainBulkPayment',
                    dataType: 'string',
                    isPrimitiveType: true,
                    isListContainer: false,
                    complexType: ''
                },
                {
                    isReadOnly: false,
                    isEnum: false,
                    required: false,
                    name: 'stockOrderIds',
                    classname: 'ChainBulkPayment',
                    dataType: 'Array&lt;string&gt;',
                    isPrimitiveType: true,
                    isListContainer: true,
                    complexType: ''
                },
                {
                    metadata: ChainActivityProof.formMetadata,
                    isReadOnly: false,
                    isEnum: false,
                    required: false,
                    name: 'additionalProofs',
                    classname: 'ChainBulkPayment',
                    dataType: 'Array&lt;ChainActivityProof&gt;',
                    isPrimitiveType: false,
                    isListContainer: true,
                    complexType: 'ChainActivityProof'
                },
                {
                    isReadOnly: false,
                    isEnum: false,
                    required: false,
                    name: 'receiptNumber',
                    classname: 'ChainBulkPayment',
                    dataType: 'string',
                    isPrimitiveType: true,
                    isListContainer: false,
                    complexType: ''
                },
                {
                    metadata: ChainOrganization.formMetadata,
                    isReadOnly: false,
                    isEnum: false,
                    required: false,
                    name: 'payingOrganization',
                    classname: 'ChainBulkPayment',
                    dataType: 'ChainOrganization',
                    isPrimitiveType: false,
                    isListContainer: false,
                    complexType: 'ChainOrganization'
                },
                {
                    metadata: ChainPayment.formMetadata,
                    isReadOnly: false,
                    isEnum: false,
                    required: false,
                    name: 'payments',
                    classname: 'ChainBulkPayment',
                    dataType: 'Array&lt;ChainPayment&gt;',
                    isPrimitiveType: false,
                    isListContainer: true,
                    complexType: 'ChainPayment'
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
                currency: [
                        ['required'],
                ],
                formalCreationTime: [
                        ['required'],
                ],
                bankInfo: [
                ],
                payingOrganizationId: [
                        ['required'],
                ],
                paymentPurposeType: [
                ],
                paymentDescription: [
                        ['required'],
                ],
                totalAmount: [
                        ['required'],
                ],
                paymentPerKg: [
                ],
                additionalCost: [
                ],
                additionalCostDescription: [
                ],
                stockOrderIds: [
                ],
                additionalProofs: [
                ],
                receiptNumber: [
                ],
                payingOrganization: [
                ],
                payments: [
                ],
            }
        }
    }

  // export const ChainBulkPaymentValidationScheme = {
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
  //               currency: {
  //                   validators: []
  //               },
  //               formalCreationTime: {
  //                   validators: []
  //               },
  //               bankInfo: {
  //                   validators: []
  //               },
  //               payingOrganizationId: {
  //                   validators: []
  //               },
  //               paymentPurposeType: {
  //                   validators: []
  //               },
  //               paymentDescription: {
  //                   validators: []
  //               },
  //               totalAmount: {
  //                   validators: []
  //               },
  //               paymentPerKg: {
  //                   validators: []
  //               },
  //               additionalCost: {
  //                   validators: []
  //               },
  //               additionalCostDescription: {
  //                   validators: []
  //               },
  //               stockOrderIds: {
  //                   validators: []
  //               },
  //               additionalProofs: {
  //                   validators: []
  //               },
  //               receiptNumber: {
  //                   validators: []
  //               },
  //               payingOrganization: {
  //                   validators: []
  //               },
  //               payments: {
  //                   validators: []
  //               },
  //     }
  // } as SimpleValidationScheme<ChainBulkPayment>;


}


