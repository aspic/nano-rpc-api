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
import { exists } from '../runtime';
export function WalletCreateResponseFromJSON(json) {
    return {
        'wallet': !exists(json, 'wallet') ? undefined : json['wallet'],
    };
}
export function WalletCreateResponseToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    return {
        'wallet': value.wallet,
    };
}
