/*
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


package org.openapitools.client.api;

import no.mehl.nano.ApiCallback;
import no.mehl.nano.ApiClient;
import no.mehl.nano.ApiException;
import no.mehl.nano.ApiResponse;
import no.mehl.nano.Configuration;
import no.mehl.nano.Pair;
import no.mehl.nano.ProgressRequestBody;
import no.mehl.nano.ProgressResponseBody;

import com.google.gson.reflect.TypeToken;

import java.io.IOException;


import org.openapitools.client.model.ConfirmationHeightCurrentlyProcessingRequest;
import org.openapitools.client.model.ConfirmationHeightCurrentlyProcessingResponse;

import java.lang.reflect.Type;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class DebugApi {
    private ApiClient localVarApiClient;

    public DebugApi() {
        this(Configuration.getDefaultApiClient());
    }

    public DebugApi(ApiClient apiClient) {
        this.localVarApiClient = apiClient;
    }

    public ApiClient getApiClient() {
        return localVarApiClient;
    }

    public void setApiClient(ApiClient apiClient) {
        this.localVarApiClient = apiClient;
    }

    /**
     * Build call for confirmationHeightCurrentlyProcessing
     * @param confirmationHeightCurrentlyProcessingRequest  (optional)
     * @param _callback Callback for upload/download progress
     * @return Call to execute
     * @throws ApiException If fail to serialize the request body object
     * @http.response.details
     <table summary="Response Details" border="1">
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 200 </td><td> Hash of the block which is having the confirmation height set for. </td><td>  -  </td></tr>
     </table>
     */
    public okhttp3.Call confirmationHeightCurrentlyProcessingCall(ConfirmationHeightCurrentlyProcessingRequest confirmationHeightCurrentlyProcessingRequest, final ApiCallback _callback) throws ApiException {
        Object localVarPostBody = confirmationHeightCurrentlyProcessingRequest;

        // create path and map variables
        String localVarPath = "/#confirmation_height_currently_processing";

        List<Pair> localVarQueryParams = new ArrayList<Pair>();
        List<Pair> localVarCollectionQueryParams = new ArrayList<Pair>();
        Map<String, String> localVarHeaderParams = new HashMap<String, String>();
        Map<String, String> localVarCookieParams = new HashMap<String, String>();
        Map<String, Object> localVarFormParams = new HashMap<String, Object>();
        final String[] localVarAccepts = {
            "application/json"
        };
        final String localVarAccept = localVarApiClient.selectHeaderAccept(localVarAccepts);
        if (localVarAccept != null) {
            localVarHeaderParams.put("Accept", localVarAccept);
        }

        final String[] localVarContentTypes = {
            "application/json"
        };
        final String localVarContentType = localVarApiClient.selectHeaderContentType(localVarContentTypes);
        localVarHeaderParams.put("Content-Type", localVarContentType);

        String[] localVarAuthNames = new String[] {  };
        return localVarApiClient.buildCall(localVarPath, "POST", localVarQueryParams, localVarCollectionQueryParams, localVarPostBody, localVarHeaderParams, localVarCookieParams, localVarFormParams, localVarAuthNames, _callback);
    }

    @SuppressWarnings("rawtypes")
    private okhttp3.Call confirmationHeightCurrentlyProcessingValidateBeforeCall(ConfirmationHeightCurrentlyProcessingRequest confirmationHeightCurrentlyProcessingRequest, final ApiCallback _callback) throws ApiException {
        

        okhttp3.Call localVarCall = confirmationHeightCurrentlyProcessingCall(confirmationHeightCurrentlyProcessingRequest, _callback);
        return localVarCall;

    }

    /**
     * 
     * _version 19.0+_  Returns the hash of the block which is having the confirmation height set for, error otherwise. When a block is being confirmed, it must confirm all blocks in the chain below and iteratively follow all receive blocks. This can take a long time, so it can be useful to find which block was the original being confirmed. 
     * @param confirmationHeightCurrentlyProcessingRequest  (optional)
     * @return ConfirmationHeightCurrentlyProcessingResponse
     * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
     * @http.response.details
     <table summary="Response Details" border="1">
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 200 </td><td> Hash of the block which is having the confirmation height set for. </td><td>  -  </td></tr>
     </table>
     */
    public ConfirmationHeightCurrentlyProcessingResponse confirmationHeightCurrentlyProcessing(ConfirmationHeightCurrentlyProcessingRequest confirmationHeightCurrentlyProcessingRequest) throws ApiException {
        ApiResponse<ConfirmationHeightCurrentlyProcessingResponse> localVarResp = confirmationHeightCurrentlyProcessingWithHttpInfo(confirmationHeightCurrentlyProcessingRequest);
        return localVarResp.getData();
    }

    /**
     * 
     * _version 19.0+_  Returns the hash of the block which is having the confirmation height set for, error otherwise. When a block is being confirmed, it must confirm all blocks in the chain below and iteratively follow all receive blocks. This can take a long time, so it can be useful to find which block was the original being confirmed. 
     * @param confirmationHeightCurrentlyProcessingRequest  (optional)
     * @return ApiResponse&lt;ConfirmationHeightCurrentlyProcessingResponse&gt;
     * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
     * @http.response.details
     <table summary="Response Details" border="1">
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 200 </td><td> Hash of the block which is having the confirmation height set for. </td><td>  -  </td></tr>
     </table>
     */
    public ApiResponse<ConfirmationHeightCurrentlyProcessingResponse> confirmationHeightCurrentlyProcessingWithHttpInfo(ConfirmationHeightCurrentlyProcessingRequest confirmationHeightCurrentlyProcessingRequest) throws ApiException {
        okhttp3.Call localVarCall = confirmationHeightCurrentlyProcessingValidateBeforeCall(confirmationHeightCurrentlyProcessingRequest, null);
        Type localVarReturnType = new TypeToken<ConfirmationHeightCurrentlyProcessingResponse>(){}.getType();
        return localVarApiClient.execute(localVarCall, localVarReturnType);
    }

    /**
     *  (asynchronously)
     * _version 19.0+_  Returns the hash of the block which is having the confirmation height set for, error otherwise. When a block is being confirmed, it must confirm all blocks in the chain below and iteratively follow all receive blocks. This can take a long time, so it can be useful to find which block was the original being confirmed. 
     * @param confirmationHeightCurrentlyProcessingRequest  (optional)
     * @param _callback The callback to be executed when the API call finishes
     * @return The request call
     * @throws ApiException If fail to process the API call, e.g. serializing the request body object
     * @http.response.details
     <table summary="Response Details" border="1">
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 200 </td><td> Hash of the block which is having the confirmation height set for. </td><td>  -  </td></tr>
     </table>
     */
    public okhttp3.Call confirmationHeightCurrentlyProcessingAsync(ConfirmationHeightCurrentlyProcessingRequest confirmationHeightCurrentlyProcessingRequest, final ApiCallback<ConfirmationHeightCurrentlyProcessingResponse> _callback) throws ApiException {

        okhttp3.Call localVarCall = confirmationHeightCurrentlyProcessingValidateBeforeCall(confirmationHeightCurrentlyProcessingRequest, _callback);
        Type localVarReturnType = new TypeToken<ConfirmationHeightCurrentlyProcessingResponse>(){}.getType();
        localVarApiClient.executeAsync(localVarCall, localVarReturnType, _callback);
        return localVarCall;
    }
}
