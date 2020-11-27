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





export interface ApiUserBase { 
    /**
     * Email/username
     */
    email?: string;
    /**
     * Entity id
     */
    id?: number;
    /**
     * language
     */
    language?: ApiUserBase.LanguageEnum;
    /**
     * Name
     */
    name?: string;
    /**
     * User role
     */
    role?: ApiUserBase.RoleEnum;
    /**
     * Status
     */
    status?: ApiUserBase.StatusEnum;
    /**
     * Surname
     */
    surname?: string;
}

/**
 * Namespace for property- and property-value-enumerations of ApiUserBase.
 */
export namespace ApiUserBase {
    /**
     * All properties of ApiUserBase.
     */
    export enum Properties {
        /**
         * Email/username
         */
        email = 'email',
        /**
         * Entity id
         */
        id = 'id',
        /**
         * language
         */
        language = 'language',
        /**
         * Name
         */
        name = 'name',
        /**
         * User role
         */
        role = 'role',
        /**
         * Status
         */
        status = 'status',
        /**
         * Surname
         */
        surname = 'surname'
    }

    /**
     * All possible values of language.
     */
    export enum LanguageEnum {
        EN = 'EN',
        DE = 'DE',
        RW = 'RW'
    }

    /**
     * All possible values of role.
     */
    export enum RoleEnum {
        USER = 'USER',
        ADMIN = 'ADMIN'
    }

    /**
     * All possible values of status.
     */
    export enum StatusEnum {
        UNCONFIRMED = 'UNCONFIRMED',
        CONFIRMEDEMAIL = 'CONFIRMED_EMAIL',
        ACTIVE = 'ACTIVE',
        DEACTIVATED = 'DEACTIVATED'
    }


    export function formMetadata() {
        return  {
            metadata: formMetadata,
            classname: 'ApiUserBase',
            vars: [
                {
                    isReadOnly: false,
                    isEnum: false,
                    required: false,
                    name: 'email',
                    classname: 'ApiUserBase',
                    dataType: 'string',
                    isPrimitiveType: true,
                    isListContainer: false,
                    complexType: ''
                },
                {
                    isReadOnly: false,
                    isEnum: false,
                    required: false,
                    name: 'id',
                    classname: 'ApiUserBase',
                    dataType: 'number',
                    isPrimitiveType: true,
                    isListContainer: false,
                    complexType: ''
                },
                {
                    isReadOnly: false,
                    isEnum: true,
                    datatypeWithEnum: 'ApiUserBase.LanguageEnum',
                    required: false,
                    name: 'language',
                    classname: 'ApiUserBase',
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
                    classname: 'ApiUserBase',
                    dataType: 'string',
                    isPrimitiveType: true,
                    isListContainer: false,
                    complexType: ''
                },
                {
                    isReadOnly: false,
                    isEnum: true,
                    datatypeWithEnum: 'ApiUserBase.RoleEnum',
                    required: false,
                    name: 'role',
                    classname: 'ApiUserBase',
                    dataType: 'string',
                    isPrimitiveType: true,
                    isListContainer: false,
                    complexType: ''
                },
                {
                    isReadOnly: false,
                    isEnum: true,
                    datatypeWithEnum: 'ApiUserBase.StatusEnum',
                    required: false,
                    name: 'status',
                    classname: 'ApiUserBase',
                    dataType: 'string',
                    isPrimitiveType: true,
                    isListContainer: false,
                    complexType: ''
                },
                {
                    isReadOnly: false,
                    isEnum: false,
                    required: false,
                    name: 'surname',
                    classname: 'ApiUserBase',
                    dataType: 'string',
                    isPrimitiveType: true,
                    isListContainer: false,
                    complexType: ''
                },
            ],
            validators: {
                email: [
                ],
                id: [
                ],
                language: [
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

  // export const ApiUserBaseValidationScheme = {
  //     validators: [],
  //     fields: {
  //               email: {
  //                   validators: []
  //               },
  //               id: {
  //                   validators: []
  //               },
  //               language: {
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
  // } as SimpleValidationScheme<ApiUserBase>;


}

