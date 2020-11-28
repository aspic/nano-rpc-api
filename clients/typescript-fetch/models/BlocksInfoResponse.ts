/* tslint:disable */
/* eslint-disable */
/**
 * nano-rpc-api
 * API specification for the [Nano Node RPC API](https://docs.nano.org/commands/rpc-protocol) 
 *
 * The version of the OpenAPI document: 19.0.0-alpha
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import {
    BlockInfo,
    BlockInfoFromJSON,
    BlockInfoFromJSONTyped,
    BlockInfoToJSON,
} from './';

/**
 * 
 * @export
 * @interface BlocksInfoResponse
 */
export interface BlocksInfoResponse {
    /**
     * 
     * @type {{ [key: string]: BlockInfo; }}
     * @memberof BlocksInfoResponse
     */
    blocks?: { [key: string]: BlockInfo; };
}

export function BlocksInfoResponseFromJSON(json: any): BlocksInfoResponse {
    return BlocksInfoResponseFromJSONTyped(json, false);
}

export function BlocksInfoResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): BlocksInfoResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'blocks': !exists(json, 'blocks') ? undefined : (mapValues(json['blocks'], BlockInfoFromJSON)),
    };
}

export function BlocksInfoResponseToJSON(value?: BlocksInfoResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'blocks': value.blocks === undefined ? undefined : (mapValues(value.blocks, BlockInfoToJSON)),
    };
}


