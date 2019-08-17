// tslint:disable
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
    ModelBoolean,
    ModelBooleanFromJSON,
    ModelBooleanToJSON,
} from './';

/**
 * 
 * @export
 * @interface BlockInfoRequest
 */
export interface BlockInfoRequest {
    /**
     * 
     * @type {string}
     * @memberof BlockInfoRequest
     */
    action: BlockInfoRequestActionEnum;
    /**
     * If \"true\", \"block\" must contain a JSON subtree instead of a JSON string.
     * @type {ModelBoolean}
     * @memberof BlockInfoRequest
     */
    jsonBlock?: ModelBoolean;
    /**
     * 
     * @type {string}
     * @memberof BlockInfoRequest
     */
    hash: string;
}

export function BlockInfoRequestFromJSON(json: any): BlockInfoRequest {
    return {
        'action': json['action'],
        'jsonBlock': !exists(json, 'json_block') ? undefined : ModelBooleanFromJSON(json['json_block']),
        'hash': json['hash'],
    };
}

export function BlockInfoRequestToJSON(value?: BlockInfoRequest): any {
    if (value === undefined) {
        return undefined;
    }
    return {
        'action': value.action,
        'json_block': ModelBooleanToJSON(value.jsonBlock),
        'hash': value.hash,
    };
}

/**
* @export
* @enum {string}
*/
export enum BlockInfoRequestActionEnum {
    BlockInfo = 'block_info'
}


