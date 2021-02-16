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

export class BlockCountRequest {
    'action': BlockCountRequestActionEnum;
    /**
    * _enable_control required, version 19.0+_ Default \"false\". If \"true\", \"cemented\" in the response will contain the number of cemented blocks. 
    */
    'includeCemented'?: boolean;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "action",
            "baseName": "action",
            "type": "BlockCountRequestActionEnum",
            "format": ""
        },
        {
            "name": "includeCemented",
            "baseName": "include_cemented",
            "type": "boolean",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return BlockCountRequest.attributeTypeMap;
    }
    
    public constructor() {
    }
}


export type BlockCountRequestActionEnum = "block_count" ;

