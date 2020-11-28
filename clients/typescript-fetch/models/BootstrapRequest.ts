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
 * @interface BootstrapRequest
 */
export interface BootstrapRequest {
    /**
     * 
     * @type {string}
     * @memberof BootstrapRequest
     */
    action: BootstrapRequestActionEnum;
    /**
     * 
     * @type {string}
     * @memberof BootstrapRequest
     */
    address?: string;
    /**
     * 
     * @type {string}
     * @memberof BootstrapRequest
     */
    port?: string;
}

export function BootstrapRequestFromJSON(json: any): BootstrapRequest {
    return BootstrapRequestFromJSONTyped(json, false);
}

export function BootstrapRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): BootstrapRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'action': json['action'],
        'address': !exists(json, 'address') ? undefined : json['address'],
        'port': !exists(json, 'port') ? undefined : json['port'],
    };
}

export function BootstrapRequestToJSON(value?: BootstrapRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'action': value.action,
        'address': value.address,
        'port': value.port,
    };
}

/**
* @export
* @enum {string}
*/
export enum BootstrapRequestActionEnum {
    Bootstrap = 'bootstrap'
}


