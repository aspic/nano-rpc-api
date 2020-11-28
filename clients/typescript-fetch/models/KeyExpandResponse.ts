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
 * @interface KeyExpandResponse
 */
export interface KeyExpandResponse {
    /**
     * 
     * @type {string}
     * @memberof KeyExpandResponse
     */
    _private?: string;
    /**
     * 
     * @type {string}
     * @memberof KeyExpandResponse
     */
    _public?: string;
    /**
     * 
     * @type {string}
     * @memberof KeyExpandResponse
     */
    account?: string;
}

export function KeyExpandResponseFromJSON(json: any): KeyExpandResponse {
    return KeyExpandResponseFromJSONTyped(json, false);
}

export function KeyExpandResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): KeyExpandResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        '_private': !exists(json, 'private') ? undefined : json['private'],
        '_public': !exists(json, 'public') ? undefined : json['public'],
        'account': !exists(json, 'account') ? undefined : json['account'],
    };
}

export function KeyExpandResponseToJSON(value?: KeyExpandResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'private': value._private,
        'public': value._public,
        'account': value.account,
    };
}


