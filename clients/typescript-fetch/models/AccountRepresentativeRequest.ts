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
 * @interface AccountRepresentativeRequest
 */
export interface AccountRepresentativeRequest {
    /**
     * 
     * @type {string}
     * @memberof AccountRepresentativeRequest
     */
    action?: AccountRepresentativeRequestActionEnum;
    /**
     * 
     * @type {string}
     * @memberof AccountRepresentativeRequest
     */
    account?: string;
}

export function AccountRepresentativeRequestFromJSON(json: any): AccountRepresentativeRequest {
    return {
        'action': !exists(json, 'action') ? undefined : json['action'],
        'account': !exists(json, 'account') ? undefined : json['account'],
    };
}

export function AccountRepresentativeRequestToJSON(value?: AccountRepresentativeRequest): any {
    if (value === undefined) {
        return undefined;
    }
    return {
        'action': value.action,
        'account': value.account,
    };
}

/**
* @export
* @enum {string}
*/
export enum AccountRepresentativeRequestActionEnum {
    AccountRepresentative = 'account_representative'
}


