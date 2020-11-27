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


import { ApiCertification } from './apiCertification';
import { ApiCompanyDocument } from './apiCompanyDocument';



export interface ApiCompanyPublic { 
    /**
     * about the company
     */
    about?: string;
    /**
     * company certifications
     */
    certifications?: Array<ApiCertification>;
    /**
     * company documents
     */
    documents?: Array<ApiCompanyDocument>;
    /**
     * interview
     */
    interview?: string;
    /**
     * social media URL links (Facebook, Instagram, Twitter, YouTube, ...)
     */
    mediaLinks?: { [key: string]: string; };
    /**
     * interview
     */
    name?: string;
}

/**
 * Namespace for property- and property-value-enumerations of ApiCompanyPublic.
 */
export namespace ApiCompanyPublic {
    /**
     * All properties of ApiCompanyPublic.
     */
    export enum Properties {
        /**
         * about the company
         */
        about = 'about',
        /**
         * company certifications
         */
        certifications = 'certifications',
        /**
         * company documents
         */
        documents = 'documents',
        /**
         * interview
         */
        interview = 'interview',
        /**
         * social media URL links (Facebook, Instagram, Twitter, YouTube, ...)
         */
        mediaLinks = 'mediaLinks',
        /**
         * interview
         */
        name = 'name'
    }


    export function formMetadata() {
        return  {
            metadata: formMetadata,
            classname: 'ApiCompanyPublic',
            vars: [
                {
                    isReadOnly: false,
                    isEnum: false,
                    required: false,
                    name: 'about',
                    classname: 'ApiCompanyPublic',
                    dataType: 'string',
                    isPrimitiveType: true,
                    isListContainer: false,
                    complexType: ''
                },
                {
                    metadata: ApiCertification.formMetadata,
                    isReadOnly: false,
                    isEnum: false,
                    required: false,
                    name: 'certifications',
                    classname: 'ApiCompanyPublic',
                    dataType: 'Array&lt;ApiCertification&gt;',
                    isPrimitiveType: false,
                    isListContainer: true,
                    complexType: 'ApiCertification'
                },
                {
                    metadata: ApiCompanyDocument.formMetadata,
                    isReadOnly: false,
                    isEnum: false,
                    required: false,
                    name: 'documents',
                    classname: 'ApiCompanyPublic',
                    dataType: 'Array&lt;ApiCompanyDocument&gt;',
                    isPrimitiveType: false,
                    isListContainer: true,
                    complexType: 'ApiCompanyDocument'
                },
                {
                    isReadOnly: false,
                    isEnum: false,
                    required: false,
                    name: 'interview',
                    classname: 'ApiCompanyPublic',
                    dataType: 'string',
                    isPrimitiveType: true,
                    isListContainer: false,
                    complexType: ''
                },
                {
                    isReadOnly: false,
                    isEnum: false,
                    required: false,
                    name: 'mediaLinks',
                    classname: 'ApiCompanyPublic',
                    dataType: '{ [key: string]: string; }',
                    isPrimitiveType: true,
                    isListContainer: false,
                    complexType: ''
                },
                {
                    isReadOnly: false,
                    isEnum: false,
                    required: false,
                    name: 'name',
                    classname: 'ApiCompanyPublic',
                    dataType: 'string',
                    isPrimitiveType: true,
                    isListContainer: false,
                    complexType: ''
                },
            ],
            validators: {
                about: [
                ],
                certifications: [
                ],
                documents: [
                ],
                interview: [
                ],
                mediaLinks: [
                ],
                name: [
                ],
            }
        }
    }

  // export const ApiCompanyPublicValidationScheme = {
  //     validators: [],
  //     fields: {
  //               about: {
  //                   validators: []
  //               },
  //               certifications: {
  //                   validators: []
  //               },
  //               documents: {
  //                   validators: []
  //               },
  //               interview: {
  //                   validators: []
  //               },
  //               mediaLinks: {
  //                   validators: []
  //               },
  //               name: {
  //                   validators: []
  //               },
  //     }
  // } as SimpleValidationScheme<ApiCompanyPublic>;


}

