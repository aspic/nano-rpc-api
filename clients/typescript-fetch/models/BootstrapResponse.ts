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
 * @interface BootstrapResponse
 */
export interface BootstrapResponse {
    /**
     * 
     * @type {string}
     * @memberof BootstrapResponse
     */
    success?: string;
}

export function BootstrapResponseFromJSON(json: any): BootstrapResponse {
    return BootstrapResponseFromJSONTyped(json, false);
}

export function BootstrapResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): BootstrapResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'success': !exists(json, 'success') ? undefined : json['success'],
    };
}

export function BootstrapResponseToJSON(value?: BootstrapResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'success': value.success,
    };
}


