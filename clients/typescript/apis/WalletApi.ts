// TODO: better import syntax?
import { BaseAPIRequestFactory, RequiredError } from './baseapi';
import {Configuration} from '../configuration';
import { RequestContext, HttpMethod, ResponseContext, HttpFile} from '../http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {isCodeInRange} from '../util';

import { AccountsCreateRequest } from '../models/AccountsCreateRequest';
import { AccountsCreateResponse } from '../models/AccountsCreateResponse';
import { ReceiveRequest } from '../models/ReceiveRequest';
import { ReceiveResponse } from '../models/ReceiveResponse';
import { WalletCreateRequest } from '../models/WalletCreateRequest';
import { WalletCreateResponse } from '../models/WalletCreateResponse';

/**
 * no description
 */
export class WalletApiRequestFactory extends BaseAPIRequestFactory {
	
    /**
     * Creates new accounts, insert next deterministic keys in wallet up to count
     * @param accountsCreateRequest 
     */
    public async accountsCreate(accountsCreateRequest?: AccountsCreateRequest, options?: Configuration): Promise<RequestContext> {
		let config = options || this.configuration;
		
		
		// Path Params
    	const localVarPath = '/#accounts_create';

		// Make Request Context
    	const requestContext = config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
	
		// Header Params
	
		// Form Params


		// Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(accountsCreateRequest, "AccountsCreateRequest", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        // Apply auth methods

        return requestContext;
    }

    /**
     * Receive pending block for account in wallet
     * @param receiveRequest 
     */
    public async receive(receiveRequest?: ReceiveRequest, options?: Configuration): Promise<RequestContext> {
		let config = options || this.configuration;
		
		
		// Path Params
    	const localVarPath = '/#receive';

		// Make Request Context
    	const requestContext = config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
	
		// Header Params
	
		// Form Params


		// Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(receiveRequest, "ReceiveRequest", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        // Apply auth methods

        return requestContext;
    }

    /**
     * Creates a new random wallet id
     * @param walletCreateRequest 
     */
    public async walletCreate(walletCreateRequest?: WalletCreateRequest, options?: Configuration): Promise<RequestContext> {
		let config = options || this.configuration;
		
		
		// Path Params
    	const localVarPath = '/#wallet_create';

		// Make Request Context
    	const requestContext = config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
	
		// Header Params
	
		// Form Params


		// Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(walletCreateRequest, "WalletCreateRequest", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        // Apply auth methods

        return requestContext;
    }

}



export class WalletApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to accountsCreate
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async accountsCreate(response: ResponseContext): Promise<AccountsCreateResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: AccountsCreateResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AccountsCreateResponse", ""
            ) as AccountsCreateResponse;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: AccountsCreateResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AccountsCreateResponse", ""
            ) as AccountsCreateResponse;
            return body;
        }

        let body = response.body || "";
    	throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }
			
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to receive
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async receive(response: ResponseContext): Promise<ReceiveResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ReceiveResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ReceiveResponse", ""
            ) as ReceiveResponse;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ReceiveResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ReceiveResponse", ""
            ) as ReceiveResponse;
            return body;
        }

        let body = response.body || "";
    	throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }
			
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to walletCreate
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async walletCreate(response: ResponseContext): Promise<WalletCreateResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: WalletCreateResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "WalletCreateResponse", ""
            ) as WalletCreateResponse;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: WalletCreateResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "WalletCreateResponse", ""
            ) as WalletCreateResponse;
            return body;
        }

        let body = response.body || "";
    	throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }
			
}
