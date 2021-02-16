// TODO: better import syntax?
import { BaseAPIRequestFactory, RequiredError } from './baseapi';
import {Configuration} from '../configuration';
import { RequestContext, HttpMethod, ResponseContext, HttpFile} from '../http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {isCodeInRange} from '../util';

import { ConfirmationHeightCurrentlyProcessingRequest } from '../models/ConfirmationHeightCurrentlyProcessingRequest';
import { ConfirmationHeightCurrentlyProcessingResponse } from '../models/ConfirmationHeightCurrentlyProcessingResponse';

/**
 * no description
 */
export class DebugApiRequestFactory extends BaseAPIRequestFactory {
	
    /**
     * _version 19.0+_  Returns the hash of the block which is having the confirmation height set for, error otherwise. When a block is being confirmed, it must confirm all blocks in the chain below and iteratively follow all receive blocks. This can take a long time, so it can be useful to find which block was the original being confirmed. 
     * @param confirmationHeightCurrentlyProcessingRequest 
     */
    public async confirmationHeightCurrentlyProcessing(confirmationHeightCurrentlyProcessingRequest?: ConfirmationHeightCurrentlyProcessingRequest, options?: Configuration): Promise<RequestContext> {
		let config = options || this.configuration;
		
		
		// Path Params
    	const localVarPath = '/#confirmation_height_currently_processing';

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
            ObjectSerializer.serialize(confirmationHeightCurrentlyProcessingRequest, "ConfirmationHeightCurrentlyProcessingRequest", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        // Apply auth methods

        return requestContext;
    }

}



export class DebugApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to confirmationHeightCurrentlyProcessing
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async confirmationHeightCurrentlyProcessing(response: ResponseContext): Promise<ConfirmationHeightCurrentlyProcessingResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ConfirmationHeightCurrentlyProcessingResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ConfirmationHeightCurrentlyProcessingResponse", ""
            ) as ConfirmationHeightCurrentlyProcessingResponse;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ConfirmationHeightCurrentlyProcessingResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ConfirmationHeightCurrentlyProcessingResponse", ""
            ) as ConfirmationHeightCurrentlyProcessingResponse;
            return body;
        }

        let body = response.body || "";
    	throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }
			
}
