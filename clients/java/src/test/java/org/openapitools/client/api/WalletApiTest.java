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

import no.mehl.nano.ApiException;
import org.openapitools.client.model.AccountsCreateRequest;
import org.openapitools.client.model.AccountsCreateResponse;
import org.openapitools.client.model.ReceiveRequest;
import org.openapitools.client.model.ReceiveResponse;
import org.openapitools.client.model.WalletCreateRequest;
import org.openapitools.client.model.WalletCreateResponse;
import org.junit.Test;
import org.junit.Ignore;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * API tests for WalletApi
 */
@Ignore
public class WalletApiTest {

    private final WalletApi api = new WalletApi();

    
    /**
     * Creates new accounts, insert next deterministic keys in wallet up to count
     *
     * 
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void accountsCreateTest() throws ApiException {
        AccountsCreateRequest accountsCreateRequest = null;
        AccountsCreateResponse response = api.accountsCreate(accountsCreateRequest);

        // TODO: test validations
    }
    
    /**
     * Receive pending block for account in wallet
     *
     * 
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void receiveTest() throws ApiException {
        ReceiveRequest receiveRequest = null;
        ReceiveResponse response = api.receive(receiveRequest);

        // TODO: test validations
    }
    
    /**
     * Creates a new random wallet id
     *
     * 
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void walletCreateTest() throws ApiException {
        WalletCreateRequest walletCreateRequest = null;
        WalletCreateResponse response = api.walletCreate(walletCreateRequest);

        // TODO: test validations
    }
    
}
