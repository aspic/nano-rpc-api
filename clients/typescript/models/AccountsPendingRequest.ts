/**
 * nano-rpc-api
 * API specification for the [Nano Node RPC API](https://docs.nano.org/commands/rpc-protocol) 
 *
 * OpenAPI spec version: 19.0.0-alpha
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { HttpFile } from '../http/http';

export class AccountsPendingRequest {
    'action'?: AccountsPendingRequestActionEnum;
    'accounts'?: Array<string>;
    'count'?: string;
    'includeActive'?: boolean;
    'source'?: boolean;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "action",
            "baseName": "action",
            "type": "AccountsPendingRequestActionEnum",
            "format": ""
        },
        {
            "name": "accounts",
            "baseName": "accounts",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "count",
            "baseName": "count",
            "type": "string",
            "format": ""
        },
        {
            "name": "includeActive",
            "baseName": "include_active",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "source",
            "baseName": "source",
            "type": "boolean",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return AccountsPendingRequest.attributeTypeMap;
    }
    
    public constructor() {
    }
}


export type AccountsPendingRequestActionEnum = "accounts_pending" ;

