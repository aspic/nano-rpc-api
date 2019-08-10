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
 * @interface BlockCountRequest
 */
export interface BlockCountRequest {
    /**
     * 
     * @type {string}
     * @memberof BlockCountRequest
     */
    action: BlockCountRequestActionEnum;
    /**
     * _enable_control required, version 19.0+_ Default \"false\". If \"true\", \"cemented\" in the response will contain the number of cemented blocks. 
     * @type {boolean}
     * @memberof BlockCountRequest
     */
    includeCemented?: boolean;
}

export function BlockCountRequestFromJSON(json: any): BlockCountRequest {
    return {
        'action': json['action'],
        'includeCemented': !exists(json, 'include_cemented') ? undefined : json['include_cemented'],
    };
}

export function BlockCountRequestToJSON(value?: BlockCountRequest): any {
    if (value === undefined) {
        return undefined;
    }
    return {
        'action': value.action,
        'include_cemented': value.includeCemented,
    };
}

/**
* @export
* @enum {string}
*/
export enum BlockCountRequestActionEnum {
    BlockCount = 'block_count'
}


