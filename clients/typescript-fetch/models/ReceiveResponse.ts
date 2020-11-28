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
/**
 * 
 * @export
 * @interface ReceiveResponse
 */
export interface ReceiveResponse {
    /**
     * 
     * @type {string}
     * @memberof ReceiveResponse
     */
    block?: string;
}

export function ReceiveResponseFromJSON(json: any): ReceiveResponse {
    return ReceiveResponseFromJSONTyped(json, false);
}

export function ReceiveResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): ReceiveResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'block': !exists(json, 'block') ? undefined : json['block'],
    };
}

export function ReceiveResponseToJSON(value?: ReceiveResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'block': value.block,
    };
}


