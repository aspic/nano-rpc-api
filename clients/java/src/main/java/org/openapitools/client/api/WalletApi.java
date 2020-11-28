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


import org.openapitools.client.model.AccountsCreateRequest;
import org.openapitools.client.model.AccountsCreateResponse;
import org.openapitools.client.model.ReceiveRequest;
import org.openapitools.client.model.ReceiveResponse;
import org.openapitools.client.model.WalletCreateRequest;
import org.openapitools.client.model.WalletCreateResponse;

import java.lang.reflect.Type;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class WalletApi {
    private ApiClient localVarApiClient;

    public WalletApi() {
        this(Configuration.getDefaultApiClient());
    }

    public WalletApi(ApiClient apiClient) {
        this.localVarApiClient = apiClient;
    }

    public ApiClient getApiClient() {
        return localVarApiClient;
    }

    public void setApiClient(ApiClient apiClient) {
        this.localVarApiClient = apiClient;
    }

    /**
     * Build call for accountsCreate
     * @param accountsCreateRequest  (optional)
     * @param _callback Callback for upload/download progress
     * @return Call to execute
     * @throws ApiException If fail to serialize the request body object
     * @http.response.details
     <table summary="Response Details" border="1">
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 200 </td><td> a list of the created accounts </td><td>  -  </td></tr>
     </table>
     */
    public okhttp3.Call accountsCreateCall(AccountsCreateRequest accountsCreateRequest, final ApiCallback _callback) throws ApiException {
        Object localVarPostBody = accountsCreateRequest;

        // create path and map variables
        String localVarPath = "/#accounts_create";

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
    private okhttp3.Call accountsCreateValidateBeforeCall(AccountsCreateRequest accountsCreateRequest, final ApiCallback _callback) throws ApiException {
        

        okhttp3.Call localVarCall = accountsCreateCall(accountsCreateRequest, _callback);
        return localVarCall;

    }

    /**
     * Creates new accounts, insert next deterministic keys in wallet up to count
     * 
     * @param accountsCreateRequest  (optional)
     * @return AccountsCreateResponse
     * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
     * @http.response.details
     <table summary="Response Details" border="1">
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 200 </td><td> a list of the created accounts </td><td>  -  </td></tr>
     </table>
     */
    public AccountsCreateResponse accountsCreate(AccountsCreateRequest accountsCreateRequest) throws ApiException {
        ApiResponse<AccountsCreateResponse> localVarResp = accountsCreateWithHttpInfo(accountsCreateRequest);
        return localVarResp.getData();
    }

    /**
     * Creates new accounts, insert next deterministic keys in wallet up to count
     * 
     * @param accountsCreateRequest  (optional)
     * @return ApiResponse&lt;AccountsCreateResponse&gt;
     * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
     * @http.response.details
     <table summary="Response Details" border="1">
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 200 </td><td> a list of the created accounts </td><td>  -  </td></tr>
     </table>
     */
    public ApiResponse<AccountsCreateResponse> accountsCreateWithHttpInfo(AccountsCreateRequest accountsCreateRequest) throws ApiException {
        okhttp3.Call localVarCall = accountsCreateValidateBeforeCall(accountsCreateRequest, null);
        Type localVarReturnType = new TypeToken<AccountsCreateResponse>(){}.getType();
        return localVarApiClient.execute(localVarCall, localVarReturnType);
    }

    /**
     * Creates new accounts, insert next deterministic keys in wallet up to count (asynchronously)
     * 
     * @param accountsCreateRequest  (optional)
     * @param _callback The callback to be executed when the API call finishes
     * @return The request call
     * @throws ApiException If fail to process the API call, e.g. serializing the request body object
     * @http.response.details
     <table summary="Response Details" border="1">
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 200 </td><td> a list of the created accounts </td><td>  -  </td></tr>
     </table>
     */
    public okhttp3.Call accountsCreateAsync(AccountsCreateRequest accountsCreateRequest, final ApiCallback<AccountsCreateResponse> _callback) throws ApiException {

        okhttp3.Call localVarCall = accountsCreateValidateBeforeCall(accountsCreateRequest, _callback);
        Type localVarReturnType = new TypeToken<AccountsCreateResponse>(){}.getType();
        localVarApiClient.executeAsync(localVarCall, localVarReturnType, _callback);
        return localVarCall;
    }
    /**
     * Build call for receive
     * @param receiveRequest  (optional)
     * @param _callback Callback for upload/download progress
     * @return Call to execute
     * @throws ApiException If fail to serialize the request body object
     * @http.response.details
     <table summary="Response Details" border="1">
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 200 </td><td> the eventually received block </td><td>  -  </td></tr>
     </table>
     */
    public okhttp3.Call receiveCall(ReceiveRequest receiveRequest, final ApiCallback _callback) throws ApiException {
        Object localVarPostBody = receiveRequest;

        // create path and map variables
        String localVarPath = "/#receive";

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
    private okhttp3.Call receiveValidateBeforeCall(ReceiveRequest receiveRequest, final ApiCallback _callback) throws ApiException {
        

        okhttp3.Call localVarCall = receiveCall(receiveRequest, _callback);
        return localVarCall;

    }

    /**
     * Receive pending block for account in wallet
     * 
     * @param receiveRequest  (optional)
     * @return ReceiveResponse
     * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
     * @http.response.details
     <table summary="Response Details" border="1">
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 200 </td><td> the eventually received block </td><td>  -  </td></tr>
     </table>
     */
    public ReceiveResponse receive(ReceiveRequest receiveRequest) throws ApiException {
        ApiResponse<ReceiveResponse> localVarResp = receiveWithHttpInfo(receiveRequest);
        return localVarResp.getData();
    }

    /**
     * Receive pending block for account in wallet
     * 
     * @param receiveRequest  (optional)
     * @return ApiResponse&lt;ReceiveResponse&gt;
     * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
     * @http.response.details
     <table summary="Response Details" border="1">
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 200 </td><td> the eventually received block </td><td>  -  </td></tr>
     </table>
     */
    public ApiResponse<ReceiveResponse> receiveWithHttpInfo(ReceiveRequest receiveRequest) throws ApiException {
        okhttp3.Call localVarCall = receiveValidateBeforeCall(receiveRequest, null);
        Type localVarReturnType = new TypeToken<ReceiveResponse>(){}.getType();
        return localVarApiClient.execute(localVarCall, localVarReturnType);
    }

    /**
     * Receive pending block for account in wallet (asynchronously)
     * 
     * @param receiveRequest  (optional)
     * @param _callback The callback to be executed when the API call finishes
     * @return The request call
     * @throws ApiException If fail to process the API call, e.g. serializing the request body object
     * @http.response.details
     <table summary="Response Details" border="1">
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 200 </td><td> the eventually received block </td><td>  -  </td></tr>
     </table>
     */
    public okhttp3.Call receiveAsync(ReceiveRequest receiveRequest, final ApiCallback<ReceiveResponse> _callback) throws ApiException {

        okhttp3.Call localVarCall = receiveValidateBeforeCall(receiveRequest, _callback);
        Type localVarReturnType = new TypeToken<ReceiveResponse>(){}.getType();
        localVarApiClient.executeAsync(localVarCall, localVarReturnType, _callback);
        return localVarCall;
    }
    /**
     * Build call for walletCreate
     * @param walletCreateRequest  (optional)
     * @param _callback Callback for upload/download progress
     * @return Call to execute
     * @throws ApiException If fail to serialize the request body object
     * @http.response.details
     <table summary="Response Details" border="1">
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 200 </td><td> The created wallet id </td><td>  -  </td></tr>
     </table>
     */
    public okhttp3.Call walletCreateCall(WalletCreateRequest walletCreateRequest, final ApiCallback _callback) throws ApiException {
        Object localVarPostBody = walletCreateRequest;

        // create path and map variables
        String localVarPath = "/#wallet_create";

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
    private okhttp3.Call walletCreateValidateBeforeCall(WalletCreateRequest walletCreateRequest, final ApiCallback _callback) throws ApiException {
        

        okhttp3.Call localVarCall = walletCreateCall(walletCreateRequest, _callback);
        return localVarCall;

    }

    /**
     * Creates a new random wallet id
     * 
     * @param walletCreateRequest  (optional)
     * @return WalletCreateResponse
     * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
     * @http.response.details
     <table summary="Response Details" border="1">
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 200 </td><td> The created wallet id </td><td>  -  </td></tr>
     </table>
     */
    public WalletCreateResponse walletCreate(WalletCreateRequest walletCreateRequest) throws ApiException {
        ApiResponse<WalletCreateResponse> localVarResp = walletCreateWithHttpInfo(walletCreateRequest);
        return localVarResp.getData();
    }

    /**
     * Creates a new random wallet id
     * 
     * @param walletCreateRequest  (optional)
     * @return ApiResponse&lt;WalletCreateResponse&gt;
     * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
     * @http.response.details
     <table summary="Response Details" border="1">
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 200 </td><td> The created wallet id </td><td>  -  </td></tr>
     </table>
     */
    public ApiResponse<WalletCreateResponse> walletCreateWithHttpInfo(WalletCreateRequest walletCreateRequest) throws ApiException {
        okhttp3.Call localVarCall = walletCreateValidateBeforeCall(walletCreateRequest, null);
        Type localVarReturnType = new TypeToken<WalletCreateResponse>(){}.getType();
        return localVarApiClient.execute(localVarCall, localVarReturnType);
    }

    /**
     * Creates a new random wallet id (asynchronously)
     * 
     * @param walletCreateRequest  (optional)
     * @param _callback The callback to be executed when the API call finishes
     * @return The request call
     * @throws ApiException If fail to process the API call, e.g. serializing the request body object
     * @http.response.details
     <table summary="Response Details" border="1">
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 200 </td><td> The created wallet id </td><td>  -  </td></tr>
     </table>
     */
    public okhttp3.Call walletCreateAsync(WalletCreateRequest walletCreateRequest, final ApiCallback<WalletCreateResponse> _callback) throws ApiException {

        okhttp3.Call localVarCall = walletCreateValidateBeforeCall(walletCreateRequest, _callback);
        Type localVarReturnType = new TypeToken<WalletCreateResponse>(){}.getType();
        localVarApiClient.executeAsync(localVarCall, localVarReturnType, _callback);
        return localVarCall;
    }
}
