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

/**
 * 
 * @export
 * @enum {string}
 */
export enum SubType {
    Send = 'send'
}

export function SubTypeFromJSON(json: any): SubType {
    return json as SubType;
}

export function SubTypeToJSON(value?: SubType): any {
    return value as any;
}

