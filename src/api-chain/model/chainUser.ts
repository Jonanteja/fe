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


import { ApiUserBaseRoleEnum } from './apiUserBaseRoleEnum';
import { ApiUserBaseStatusEnum } from './apiUserBaseStatusEnum';
import { ChainLocation } from './chainLocation';


/**
 * User is a user in company
 */

export interface ChainUser { 
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
     * User id from af-coffee-ap database
     */
    id: number;
    productionLocation?: ChainLocation;
    /**
     * Human readable user identificator
     */
    userId?: string;
    /**
     * Email/username
     */
    email?: string;
    /**
     * Name
     */
    name?: string;
    role?: ApiUserBaseRoleEnum;
    status?: ApiUserBaseStatusEnum;
    /**
     * Surname
     */
    surname?: string;
}

/**
 * Namespace for property- and property-value-enumerations of ChainUser.
 */
export namespace ChainUser {
    /**
     * All properties of ChainUser.
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
         * User id from af-coffee-ap database
         */
        id = 'id',
        productionLocation = 'productionLocation',
        /**
         * Human readable user identificator
         */
        userId = 'userId',
        /**
         * Email/username
         */
        email = 'email',
        /**
         * Name
         */
        name = 'name',
        role = 'role',
        status = 'status',
        /**
         * Surname
         */
        surname = 'surname'
    }


    export function formMetadata() {
        return  {
            metadata: formMetadata,
            classname: 'ChainUser',
            vars: [
                {
                    isReadOnly: false,
                    isEnum: false,
                    required: false,
                    name: 'docType',
                    classname: 'ChainUser',
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
                    classname: 'ChainUser',
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
                    classname: 'ChainUser',
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
                    classname: 'ChainUser',
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
                    classname: 'ChainUser',
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
                    classname: 'ChainUser',
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
                    classname: 'ChainUser',
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
                    classname: 'ChainUser',
                    dataType: 'number',
                    isPrimitiveType: true,
                    isListContainer: false,
                    complexType: ''
                },
                {
                    metadata: ChainLocation.formMetadata,
                    isReadOnly: false,
                    isEnum: false,
                    required: false,
                    name: 'productionLocation',
                    classname: 'ChainUser',
                    dataType: 'ChainLocation',
                    isPrimitiveType: false,
                    isListContainer: false,
                    complexType: 'ChainLocation'
                },
                {
                    isReadOnly: false,
                    isEnum: false,
                    required: false,
                    name: 'userId',
                    classname: 'ChainUser',
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
                    classname: 'ChainUser',
                    dataType: 'string',
                    isPrimitiveType: true,
                    isListContainer: false,
                    complexType: ''
                },
                {
                    isReadOnly: false,
                    isEnum: false,
                    required: false,
                    name: 'name',
                    classname: 'ChainUser',
                    dataType: 'string',
                    isPrimitiveType: true,
                    isListContainer: false,
                    complexType: ''
                },
                {
                    metadata: ApiUserBaseRoleEnum.formMetadata,
                    isReadOnly: false,
                    isEnum: false,
                    required: false,
                    name: 'role',
                    classname: 'ChainUser',
                    dataType: 'ApiUserBaseRoleEnum',
                    isPrimitiveType: false,
                    isListContainer: false,
                    complexType: 'ApiUserBaseRoleEnum'
                },
                {
                    metadata: ApiUserBaseStatusEnum.formMetadata,
                    isReadOnly: false,
                    isEnum: false,
                    required: false,
                    name: 'status',
                    classname: 'ChainUser',
                    dataType: 'ApiUserBaseStatusEnum',
                    isPrimitiveType: false,
                    isListContainer: false,
                    complexType: 'ApiUserBaseStatusEnum'
                },
                {
                    isReadOnly: false,
                    isEnum: false,
                    required: false,
                    name: 'surname',
                    classname: 'ChainUser',
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
                productionLocation: [
                ],
                userId: [
                ],
                email: [
                ],
                name: [
                ],
                role: [
                ],
                status: [
                ],
                surname: [
                ],
            }
        }
    }

  // export const ChainUserValidationScheme = {
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
  //               id: {
  //                   validators: []
  //               },
  //               productionLocation: {
  //                   validators: []
  //               },
  //               userId: {
  //                   validators: []
  //               },
  //               email: {
  //                   validators: []
  //               },
  //               name: {
  //                   validators: []
  //               },
  //               role: {
  //                   validators: []
  //               },
  //               status: {
  //                   validators: []
  //               },
  //               surname: {
  //                   validators: []
  //               },
  //     }
  // } as SimpleValidationScheme<ChainUser>;


}

