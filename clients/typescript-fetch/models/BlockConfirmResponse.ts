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
 * @interface BlockConfirmResponse
 */
export interface BlockConfirmResponse {
    /**
     * 
     * @type {string}
     * @memberof BlockConfirmResponse
     */
    started?: string;
}

export function BlockConfirmResponseFromJSON(json: any): BlockConfirmResponse {
    return BlockConfirmResponseFromJSONTyped(json, false);
}

export function BlockConfirmResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): BlockConfirmResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'started': !exists(json, 'started') ? undefined : json['started'],
    };
}

export function BlockConfirmResponseToJSON(value?: BlockConfirmResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'started': value.started,
    };
}


