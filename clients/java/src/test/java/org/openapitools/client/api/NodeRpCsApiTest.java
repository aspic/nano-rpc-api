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
import org.openapitools.client.model.AccountBalanceRequest;
import org.openapitools.client.model.AccountBalanceResponse;
import org.openapitools.client.model.AccountBlockCountRequest;
import org.openapitools.client.model.AccountBlockCountResponse;
import org.openapitools.client.model.AccountGetRequest;
import org.openapitools.client.model.AccountGetResponse;
import org.openapitools.client.model.AccountHistoryRequest;
import org.openapitools.client.model.AccountHistoryResponse;
import org.openapitools.client.model.AccountInfoRequest;
import org.openapitools.client.model.AccountInfoResponse;
import org.openapitools.client.model.AccountKeyRequest;
import org.openapitools.client.model.AccountKeyResponse;
import org.openapitools.client.model.AccountRepresentativeRequest;
import org.openapitools.client.model.AccountRepresentativeResponse;
import org.openapitools.client.model.AccountWeightRequest;
import org.openapitools.client.model.AccountWeightResponse;
import org.openapitools.client.model.AccountsBalancesRequest;
import org.openapitools.client.model.AccountsBalancesResponse;
import org.openapitools.client.model.AccountsPendingRequest;
import org.openapitools.client.model.AccountsPendingResponse;
import org.openapitools.client.model.ActiveDifficultyRequest;
import org.openapitools.client.model.ActiveDifficultyResponse;
import org.openapitools.client.model.AvailableSupplyRequest;
import org.openapitools.client.model.AvailableSupplyResponse;
import org.openapitools.client.model.BlockAccountRequest;
import org.openapitools.client.model.BlockAccountResponse;
import org.openapitools.client.model.BlockConfirmRequest;
import org.openapitools.client.model.BlockConfirmResponse;
import org.openapitools.client.model.BlockCountRequest;
import org.openapitools.client.model.BlockCountResponse;
import org.openapitools.client.model.BlockCountTypeRequest;
import org.openapitools.client.model.BlockCountTypeResponse;
import org.openapitools.client.model.BlockCreateRequest;
import org.openapitools.client.model.BlockCreateResponse;
import org.openapitools.client.model.BlocksInfoRequest;
import org.openapitools.client.model.BlocksInfoResponse;
import org.openapitools.client.model.BlocksRequest;
import org.openapitools.client.model.BlocksResponse;
import org.openapitools.client.model.KeyCreateRequest;
import org.openapitools.client.model.KeyCreateResponse;
import org.openapitools.client.model.KeyExpandRequest;
import org.openapitools.client.model.KeyExpandResponse;
import org.openapitools.client.model.ProcessRequest;
import org.openapitools.client.model.ProcessResponse;
import org.openapitools.client.model.WorkGenerateRequest;
import org.openapitools.client.model.WorkGenerateResponse;
import org.junit.Test;
import org.junit.Ignore;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * API tests for NodeRpCsApi
 */
@Ignore
public class NodeRpCsApiTest {

    private final NodeRpCsApi api = new NodeRpCsApi();

    
    /**
     * 
     *
     * Returns how many RAW is owned and how many have not yet been received by **account** &gt; This call may return results that include unconfirmed blocks, so it should not be used in any processes or integrations requiring only details from blocks confirmed by the network. 
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void accountBalanceTest() throws ApiException {
        AccountBalanceRequest accountBalanceRequest = null;
        AccountBalanceResponse response = api.accountBalance(accountBalanceRequest);

        // TODO: test validations
    }
    
    /**
     * 
     *
     * Get number of blocks for a specific account
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void accountBlockCountTest() throws ApiException {
        AccountBlockCountRequest accountBlockCountRequest = null;
        AccountBlockCountResponse response = api.accountBlockCount(accountBlockCountRequest);

        // TODO: test validations
    }
    
    /**
     * 
     *
     * Get account for the public key
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void accountGetTest() throws ApiException {
        AccountGetRequest accountGetRequest = null;
        AccountGetResponse response = api.accountGet(accountGetRequest);

        // TODO: test validations
    }
    
    /**
     * 
     *
     * Gets the account history. Reports send/receive information for an account. 
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void accountHistoryTest() throws ApiException {
        AccountHistoryRequest accountHistoryRequest = null;
        AccountHistoryResponse response = api.accountHistory(accountHistoryRequest);

        // TODO: test validations
    }
    
    /**
     * 
     *
     * Returns frontier, open block, change representative block, balance, last modified timestamp from local database &amp; block count for **account**. Only works for accounts that have an entry on the ledger, will return _Account not found_ otherwise. 
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void accountInfoTest() throws ApiException {
        AccountInfoRequest accountInfoRequest = null;
        AccountInfoResponse response = api.accountInfo(accountInfoRequest);

        // TODO: test validations
    }
    
    /**
     * 
     *
     * Get the public key for **account** 
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void accountKeyTest() throws ApiException {
        AccountKeyRequest accountKeyRequest = null;
        AccountKeyResponse response = api.accountKey(accountKeyRequest);

        // TODO: test validations
    }
    
    /**
     * 
     *
     * Returns the representative for **account** 
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void accountRepresentativeTest() throws ApiException {
        AccountRepresentativeRequest accountRepresentativeRequest = null;
        AccountRepresentativeResponse response = api.accountRepresentative(accountRepresentativeRequest);

        // TODO: test validations
    }
    
    /**
     * 
     *
     * Returns the voting weight for **account** 
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void accountWeightTest() throws ApiException {
        AccountWeightRequest accountWeightRequest = null;
        AccountWeightResponse response = api.accountWeight(accountWeightRequest);

        // TODO: test validations
    }
    
    /**
     * 
     *
     * Returns how many RAW is owned and how many have not yet been received by **accounts list**  This call may return results that include unconfirmed blocks, so it should not be used in any processes or integrations requiring only details from blocks confirmed by the network. 
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void accountsBalancesTest() throws ApiException {
        AccountsBalancesRequest accountsBalancesRequest = null;
        AccountsBalancesResponse response = api.accountsBalances(accountsBalancesRequest);

        // TODO: test validations
    }
    
    /**
     * 
     *
     * Returns a list of block hashes which have not yet been received by these accounts
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void accountsPendingTest() throws ApiException {
        AccountsPendingRequest accountsPendingRequest = null;
        AccountsPendingResponse response = api.accountsPending(accountsPendingRequest);

        // TODO: test validations
    }
    
    /**
     * 
     *
     * Returns the difficulty values (16 hexadecimal digits string, 64 bit) for the minimum required on the network (network_minimum) as well as the current active difficulty seen on the network (network_current, 5 minute trended average of adjusted difficulty seen on confirmed transactions) which can be used to perform rework for better prioritization of transaction processing. A multiplier of the network_current from the base difficulty of network_minimum is also provided for comparison. 
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void activeDifficultyTest() throws ApiException {
        ActiveDifficultyRequest activeDifficultyRequest = null;
        ActiveDifficultyResponse response = api.activeDifficulty(activeDifficultyRequest);

        // TODO: test validations
    }
    
    /**
     * 
     *
     * Returns how many raw are in the public supply 
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void availableSupplyTest() throws ApiException {
        AvailableSupplyRequest availableSupplyRequest = null;
        AvailableSupplyResponse response = api.availableSupply(availableSupplyRequest);

        // TODO: test validations
    }
    
    /**
     * 
     *
     * Returns the account containing block 
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void blockAccountTest() throws ApiException {
        BlockAccountRequest blockAccountRequest = null;
        BlockAccountResponse response = api.blockAccount(blockAccountRequest);

        // TODO: test validations
    }
    
    /**
     * 
     *
     * Request confirmation for **block** from known online representative nodes. Check results with confirmation history. 
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void blockConfirmTest() throws ApiException {
        BlockConfirmRequest blockConfirmRequest = null;
        BlockConfirmResponse response = api.blockConfirm(blockConfirmRequest);

        // TODO: test validations
    }
    
    /**
     * 
     *
     * Reports the number of blocks in the ledger and unchecked synchronizing blocks. 
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void blockCountTest() throws ApiException {
        BlockCountRequest blockCountRequest = null;
        BlockCountResponse response = api.blockCount(blockCountRequest);

        // TODO: test validations
    }
    
    /**
     * 
     *
     * Reports the number of blocks in the ledger by type (send, receive, open, change, state with version) 
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void blockCountTypeTest() throws ApiException {
        BlockCountTypeRequest blockCountTypeRequest = null;
        BlockCountTypeResponse response = api.blockCountType(blockCountTypeRequest);

        // TODO: test validations
    }
    
    /**
     * 
     *
     * Creates a json representations of new block based on input data &amp; signed with **private key** or **account** in **wallet**. Use for offline signing. 
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void blockCreateTest() throws ApiException {
        BlockCreateRequest blockCreateRequest = null;
        BlockCreateResponse response = api.blockCreate(blockCreateRequest);

        // TODO: test validations
    }
    
    /**
     * 
     *
     * Retrieves a json representations of **blocks**. 
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void blocksTest() throws ApiException {
        BlocksRequest blocksRequest = null;
        BlocksResponse response = api.blocks(blocksRequest);

        // TODO: test validations
    }
    
    /**
     * 
     *
     * Retrieves a json representations of blocks in contents along with:  * _since version 18.0_: &#x60;block_account&#x60;, transaction &#x60;amount&#x60;, block &#x60;balance&#x60;, block &#x60;height&#x60; in account chain, block local modification  timestamp * _since version 19.0_: Whether block was &#x60;confirmed&#x60;, &#x60;subtype&#x60; (for state blocks) of &#x60;send&#x60;, &#x60;receive&#x60;, &#x60;change&#x60; or &#x60;epoch&#x60; 
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void blocksInfoTest() throws ApiException {
        BlocksInfoRequest blocksInfoRequest = null;
        BlocksInfoResponse response = api.blocksInfo(blocksInfoRequest);

        // TODO: test validations
    }
    
    /**
     * 
     *
     * Generates an **adhoc random** keypair 
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void keyCreateTest() throws ApiException {
        KeyCreateRequest keyCreateRequest = null;
        KeyCreateResponse response = api.keyCreate(keyCreateRequest);

        // TODO: test validations
    }
    
    /**
     * 
     *
     * Derive public key and account number from **private key** 
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void keyExpandTest() throws ApiException {
        KeyExpandRequest keyExpandRequest = null;
        KeyExpandResponse response = api.keyExpand(keyExpandRequest);

        // TODO: test validations
    }
    
    /**
     * 
     *
     * Publish block to the network
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void processTest() throws ApiException {
        ProcessRequest processRequest = null;
        ProcessResponse response = api.process(processRequest);

        // TODO: test validations
    }
    
    /**
     * 
     *
     * Generates work for block. hash is the frontier of the account or in the case of an open block, the public key representation of the account which can be found with account_key 
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void workGenerateTest() throws ApiException {
        WorkGenerateRequest workGenerateRequest = null;
        WorkGenerateResponse response = api.workGenerate(workGenerateRequest);

        // TODO: test validations
    }
    
}
