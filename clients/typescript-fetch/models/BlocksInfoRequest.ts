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
/**
 * 
 * @export
 * @interface BlocksInfoRequest
 */
export interface BlocksInfoRequest {
    /**
     * 
     * @type {string}
     * @memberof BlocksInfoRequest
     */
    action: BlocksInfoRequestActionEnum;
    /**
     * 
     * @type {Array<string>}
     * @memberof BlocksInfoRequest
     */
    hashes?: Array<string>;
}

export function BlocksInfoRequestFromJSON(json: any): BlocksInfoRequest {
    return {
        'action': json['action'],
        'hashes': !exists(json, 'hashes') ? undefined : json['hashes'],
    };
}

export function BlocksInfoRequestToJSON(value?: BlocksInfoRequest): any {
    if (value === undefined) {
        return undefined;
    }
    return {
        'action': value.action,
        'hashes': value.hashes,
    };
}

/**
* @export
* @enum {string}
*/
export enum BlocksInfoRequestActionEnum {
    BlocksInfo = 'blocks_info'
}


