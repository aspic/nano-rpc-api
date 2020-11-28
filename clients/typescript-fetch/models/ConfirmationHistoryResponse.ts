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
    Confirmation,
    ConfirmationFromJSON,
    ConfirmationFromJSONTyped,
    ConfirmationToJSON,
    ConfirmationHistoryResponseConfirmationStats,
    ConfirmationHistoryResponseConfirmationStatsFromJSON,
    ConfirmationHistoryResponseConfirmationStatsFromJSONTyped,
    ConfirmationHistoryResponseConfirmationStatsToJSON,
} from './';

/**
 * 
 * @export
 * @interface ConfirmationHistoryResponse
 */
export interface ConfirmationHistoryResponse {
    /**
     * 
     * @type {ConfirmationHistoryResponseConfirmationStats}
     * @memberof ConfirmationHistoryResponse
     */
    confirmationStats?: ConfirmationHistoryResponseConfirmationStats;
    /**
     * 
     * @type {Array<Confirmation>}
     * @memberof ConfirmationHistoryResponse
     */
    confirmations?: Array<Confirmation>;
}

export function ConfirmationHistoryResponseFromJSON(json: any): ConfirmationHistoryResponse {
    return ConfirmationHistoryResponseFromJSONTyped(json, false);
}

export function ConfirmationHistoryResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): ConfirmationHistoryResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'confirmationStats': !exists(json, 'confirmation_stats') ? undefined : ConfirmationHistoryResponseConfirmationStatsFromJSON(json['confirmation_stats']),
        'confirmations': !exists(json, 'confirmations') ? undefined : ((json['confirmations'] as Array<any>).map(ConfirmationFromJSON)),
    };
}

export function ConfirmationHistoryResponseToJSON(value?: ConfirmationHistoryResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'confirmation_stats': ConfirmationHistoryResponseConfirmationStatsToJSON(value.confirmationStats),
        'confirmations': value.confirmations === undefined ? undefined : ((value.confirmations as Array<any>).map(ConfirmationToJSON)),
    };
}


