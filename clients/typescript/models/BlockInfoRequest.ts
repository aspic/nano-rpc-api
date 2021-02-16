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

import { ModelBoolean } from './ModelBoolean';
import { HttpFile } from '../http/http';

export class BlockInfoRequest {
    'action': BlockInfoRequestActionEnum;
    /**
    * Defaults to `\"false\"`. If `\"true\"`, `\"block\"` contains a JSON subtree instead of a JSON string.
    */
    'jsonBlock'?: ModelBoolean;
    'hash': string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "action",
            "baseName": "action",
            "type": "BlockInfoRequestActionEnum",
            "format": ""
        },
        {
            "name": "jsonBlock",
            "baseName": "json_block",
            "type": "ModelBoolean",
            "format": ""
        },
        {
            "name": "hash",
            "baseName": "hash",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return BlockInfoRequest.attributeTypeMap;
    }
    
    public constructor() {
    }
}


export type BlockInfoRequestActionEnum = "block_info" ;

