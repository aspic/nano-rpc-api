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
 * @interface WorkGenerateResponse
 */
export interface WorkGenerateResponse {
    /**
     *
     * @type {string}
     * @memberof WorkGenerateResponse
     */
    work?: string;
    /**
     *
     * @type {string}
     * @memberof WorkGenerateResponse
     */
    difficulty?: string;
    /**
     *
     * @type {string}
     * @memberof WorkGenerateResponse
     */
    multiplier?: string;
}
export declare function WorkGenerateResponseFromJSON(json: any): WorkGenerateResponse;
export declare function WorkGenerateResponseToJSON(value?: WorkGenerateResponse): any;
