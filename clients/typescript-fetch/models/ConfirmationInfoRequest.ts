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
    ModelBoolean,
    ModelBooleanFromJSON,
    ModelBooleanFromJSONTyped,
    ModelBooleanToJSON,
} from './';

/**
 * 
 * @export
 * @interface ConfirmationInfoRequest
 */
export interface ConfirmationInfoRequest {
    /**
     * 
     * @type {string}
     * @memberof ConfirmationInfoRequest
     */
    action: ConfirmationInfoRequestActionEnum;
    /**
     * Defaults to `"false"`. If `"true"`, `"contents"` contains a JSON subtree instead of a JSON string.
     * @type {ModelBoolean}
     * @memberof ConfirmationInfoRequest
     */
    jsonBlock?: ModelBoolean;
    /**
     * Defaults to `"true"`. If `"false"`, disables contents for each block.
     * @type {ModelBoolean}
     * @memberof ConfirmationInfoRequest
     */
    contents?: ModelBoolean;
    /**
     * Defaults to `"false"`. If `"true"`, returns a list of votes representatives & its weights for each block.
     * @type {ModelBoolean}
     * @memberof ConfirmationInfoRequest
     */
    representatives?: ModelBoolean;
}

export function ConfirmationInfoRequestFromJSON(json: any): ConfirmationInfoRequest {
    return ConfirmationInfoRequestFromJSONTyped(json, false);
}

export function ConfirmationInfoRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): ConfirmationInfoRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'action': json['action'],
        'jsonBlock': !exists(json, 'json_block') ? undefined : ModelBooleanFromJSON(json['json_block']),
        'contents': !exists(json, 'contents') ? undefined : ModelBooleanFromJSON(json['contents']),
        'representatives': !exists(json, 'representatives') ? undefined : ModelBooleanFromJSON(json['representatives']),
    };
}

export function ConfirmationInfoRequestToJSON(value?: ConfirmationInfoRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'action': value.action,
        'json_block': ModelBooleanToJSON(value.jsonBlock),
        'contents': ModelBooleanToJSON(value.contents),
        'representatives': ModelBooleanToJSON(value.representatives),
    };
}

/**
* @export
* @enum {string}
*/
export enum ConfirmationInfoRequestActionEnum {
    ConfirmationInfo = 'confirmation_info'
}


