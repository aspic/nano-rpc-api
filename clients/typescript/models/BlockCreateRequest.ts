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

export class BlockCreateRequest {
    'action'?: BlockCreateRequestActionEnum;
    /**
    * Defaults to `\"false\"`. If `\"true\"`, `\"block\"` contains a JSON subtree instead of a JSON string.
    */
    'jsonBlock'?: ModelBoolean;
    'type'?: BlockCreateRequestTypeEnum;
    /**
    * 1 raw is the smallest possible division and NANO/Nano (Mnano) is the current standard division used in most wallets, on exchanges, etc.
    */
    'balance'?: number;
    'key'?: string;
    'representative'?: string;
    'link'?: string;
    'work'?: string;
    'previous'?: string;
    'wallet'?: string;
    'account'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "action",
            "baseName": "action",
            "type": "BlockCreateRequestActionEnum",
            "format": ""
        },
        {
            "name": "jsonBlock",
            "baseName": "json_block",
            "type": "ModelBoolean",
            "format": ""
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "BlockCreateRequestTypeEnum",
            "format": ""
        },
        {
            "name": "balance",
            "baseName": "balance",
            "type": "number",
            "format": ""
        },
        {
            "name": "key",
            "baseName": "key",
            "type": "string",
            "format": ""
        },
        {
            "name": "representative",
            "baseName": "representative",
            "type": "string",
            "format": ""
        },
        {
            "name": "link",
            "baseName": "link",
            "type": "string",
            "format": ""
        },
        {
            "name": "work",
            "baseName": "work",
            "type": "string",
            "format": ""
        },
        {
            "name": "previous",
            "baseName": "previous",
            "type": "string",
            "format": ""
        },
        {
            "name": "wallet",
            "baseName": "wallet",
            "type": "string",
            "format": ""
        },
        {
            "name": "account",
            "baseName": "account",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return BlockCreateRequest.attributeTypeMap;
    }
    
    public constructor() {
    }
}


export type BlockCreateRequestActionEnum = "block_create" ;
export type BlockCreateRequestTypeEnum = "state" ;

