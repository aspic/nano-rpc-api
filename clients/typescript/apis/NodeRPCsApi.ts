// TODO: better import syntax?
import { BaseAPIRequestFactory, RequiredError } from './baseapi';
import {Configuration} from '../configuration';
import { RequestContext, HttpMethod, ResponseContext, HttpFile} from '../http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {isCodeInRange} from '../util';

import { AccountBalanceRequest } from '../models/AccountBalanceRequest';
import { AccountBalanceResponse } from '../models/AccountBalanceResponse';
import { AccountBlockCountRequest } from '../models/AccountBlockCountRequest';
import { AccountBlockCountResponse } from '../models/AccountBlockCountResponse';
import { AccountGetRequest } from '../models/AccountGetRequest';
import { AccountGetResponse } from '../models/AccountGetResponse';
import { AccountHistoryRequest } from '../models/AccountHistoryRequest';
import { AccountHistoryResponse } from '../models/AccountHistoryResponse';
import { AccountInfoRequest } from '../models/AccountInfoRequest';
import { AccountInfoResponse } from '../models/AccountInfoResponse';
import { AccountKeyRequest } from '../models/AccountKeyRequest';
import { AccountKeyResponse } from '../models/AccountKeyResponse';
import { AccountRepresentativeRequest } from '../models/AccountRepresentativeRequest';
import { AccountRepresentativeResponse } from '../models/AccountRepresentativeResponse';
import { AccountWeightRequest } from '../models/AccountWeightRequest';
import { AccountWeightResponse } from '../models/AccountWeightResponse';
import { AccountsBalancesRequest } from '../models/AccountsBalancesRequest';
import { AccountsBalancesResponse } from '../models/AccountsBalancesResponse';
import { AccountsFrontiersRequest } from '../models/AccountsFrontiersRequest';
import { AccountsFrontiersResponse } from '../models/AccountsFrontiersResponse';
import { AccountsPendingRequest } from '../models/AccountsPendingRequest';
import { AccountsPendingResponse } from '../models/AccountsPendingResponse';
import { ActiveDifficultyRequest } from '../models/ActiveDifficultyRequest';
import { ActiveDifficultyResponse } from '../models/ActiveDifficultyResponse';
import { AvailableSupplyRequest } from '../models/AvailableSupplyRequest';
import { AvailableSupplyResponse } from '../models/AvailableSupplyResponse';
import { BlockAccountRequest } from '../models/BlockAccountRequest';
import { BlockAccountResponse } from '../models/BlockAccountResponse';
import { BlockConfirmRequest } from '../models/BlockConfirmRequest';
import { BlockConfirmResponse } from '../models/BlockConfirmResponse';
import { BlockCountRequest } from '../models/BlockCountRequest';
import { BlockCountResponse } from '../models/BlockCountResponse';
import { BlockCountTypeRequest } from '../models/BlockCountTypeRequest';
import { BlockCountTypeResponse } from '../models/BlockCountTypeResponse';
import { BlockCreateRequest } from '../models/BlockCreateRequest';
import { BlockCreateResponse } from '../models/BlockCreateResponse';
import { BlockHashRequest } from '../models/BlockHashRequest';
import { BlockHashResponse } from '../models/BlockHashResponse';
import { BlockInfoRequest } from '../models/BlockInfoRequest';
import { BlockInfoResponse } from '../models/BlockInfoResponse';
import { BlocksInfoRequest } from '../models/BlocksInfoRequest';
import { BlocksInfoResponse } from '../models/BlocksInfoResponse';
import { BlocksRequest } from '../models/BlocksRequest';
import { BlocksResponse } from '../models/BlocksResponse';
import { BootstrapAnyRequest } from '../models/BootstrapAnyRequest';
import { BootstrapAnyResponse } from '../models/BootstrapAnyResponse';
import { BootstrapLazyRequest } from '../models/BootstrapLazyRequest';
import { BootstrapLazyResponse } from '../models/BootstrapLazyResponse';
import { BootstrapRequest } from '../models/BootstrapRequest';
import { BootstrapResponse } from '../models/BootstrapResponse';
import { ChainRequest } from '../models/ChainRequest';
import { ChainResponse } from '../models/ChainResponse';
import { ConfirmationActiveRequest } from '../models/ConfirmationActiveRequest';
import { ConfirmationActiveResponse } from '../models/ConfirmationActiveResponse';
import { ConfirmationHistoryRequest } from '../models/ConfirmationHistoryRequest';
import { ConfirmationHistoryResponse } from '../models/ConfirmationHistoryResponse';
import { ConfirmationInfoRequest } from '../models/ConfirmationInfoRequest';
import { ConfirmationInfoResponse } from '../models/ConfirmationInfoResponse';
import { KeyCreateRequest } from '../models/KeyCreateRequest';
import { KeyCreateResponse } from '../models/KeyCreateResponse';
import { KeyExpandRequest } from '../models/KeyExpandRequest';
import { KeyExpandResponse } from '../models/KeyExpandResponse';
import { PendingRequest } from '../models/PendingRequest';
import { PendingResponse } from '../models/PendingResponse';
import { ProcessRequest } from '../models/ProcessRequest';
import { ProcessResponse } from '../models/ProcessResponse';
import { WorkGenerateRequest } from '../models/WorkGenerateRequest';
import { WorkGenerateResponse } from '../models/WorkGenerateResponse';

/**
 * no description
 */
export class NodeRPCsApiRequestFactory extends BaseAPIRequestFactory {
	
    /**
     * Returns how many RAW is owned and how many have not yet been received by **account** > This call may return results that include unconfirmed blocks, so it should not be used in any processes or integrations requiring only details from blocks confirmed by the network. 
     * @param accountBalanceRequest 
     */
    public async accountBalance(accountBalanceRequest?: AccountBalanceRequest, options?: Configuration): Promise<RequestContext> {
		let config = options || this.configuration;
		
		
		// Path Params
    	const localVarPath = '/#account_balance';

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
            ObjectSerializer.serialize(accountBalanceRequest, "AccountBalanceRequest", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        // Apply auth methods

        return requestContext;
    }

    /**
     * Get number of blocks for a specific account
     * @param accountBlockCountRequest 
     */
    public async accountBlockCount(accountBlockCountRequest?: AccountBlockCountRequest, options?: Configuration): Promise<RequestContext> {
		let config = options || this.configuration;
		
		
		// Path Params
    	const localVarPath = '/#account_block_count';

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
            ObjectSerializer.serialize(accountBlockCountRequest, "AccountBlockCountRequest", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        // Apply auth methods

        return requestContext;
    }

    /**
     * Get account for the public key
     * @param accountGetRequest 
     */
    public async accountGet(accountGetRequest?: AccountGetRequest, options?: Configuration): Promise<RequestContext> {
		let config = options || this.configuration;
		
		
		// Path Params
    	const localVarPath = '/#account_get';

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
            ObjectSerializer.serialize(accountGetRequest, "AccountGetRequest", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        // Apply auth methods

        return requestContext;
    }

    /**
     * Gets the account history. Reports send/receive information for an account. 
     * @param accountHistoryRequest 
     */
    public async accountHistory(accountHistoryRequest?: AccountHistoryRequest, options?: Configuration): Promise<RequestContext> {
		let config = options || this.configuration;
		
		
		// Path Params
    	const localVarPath = '/#account_history';

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
            ObjectSerializer.serialize(accountHistoryRequest, "AccountHistoryRequest", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        // Apply auth methods

        return requestContext;
    }

    /**
     * Returns frontier, open block, change representative block, balance, last modified timestamp from local database & block count for **account**. Only works for accounts that have an entry on the ledger, will return _Account not found_ otherwise. 
     * @param accountInfoRequest 
     */
    public async accountInfo(accountInfoRequest?: AccountInfoRequest, options?: Configuration): Promise<RequestContext> {
		let config = options || this.configuration;
		
		
		// Path Params
    	const localVarPath = '/#account_info';

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
            ObjectSerializer.serialize(accountInfoRequest, "AccountInfoRequest", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        // Apply auth methods

        return requestContext;
    }

    /**
     * Get the public key for **account** 
     * @param accountKeyRequest 
     */
    public async accountKey(accountKeyRequest?: AccountKeyRequest, options?: Configuration): Promise<RequestContext> {
		let config = options || this.configuration;
		
		
		// Path Params
    	const localVarPath = '/#account_key';

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
            ObjectSerializer.serialize(accountKeyRequest, "AccountKeyRequest", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        // Apply auth methods

        return requestContext;
    }

    /**
     * Returns the representative for **account** 
     * @param accountRepresentativeRequest 
     */
    public async accountRepresentative(accountRepresentativeRequest?: AccountRepresentativeRequest, options?: Configuration): Promise<RequestContext> {
		let config = options || this.configuration;
		
		
		// Path Params
    	const localVarPath = '/#account_representative';

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
            ObjectSerializer.serialize(accountRepresentativeRequest, "AccountRepresentativeRequest", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        // Apply auth methods

        return requestContext;
    }

    /**
     * Returns the voting weight for **account** 
     * @param accountWeightRequest 
     */
    public async accountWeight(accountWeightRequest?: AccountWeightRequest, options?: Configuration): Promise<RequestContext> {
		let config = options || this.configuration;
		
		
		// Path Params
    	const localVarPath = '/#account_weight';

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
            ObjectSerializer.serialize(accountWeightRequest, "AccountWeightRequest", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        // Apply auth methods

        return requestContext;
    }

    /**
     * Returns how many RAW is owned and how many have not yet been received by **accounts list**  This call may return results that include unconfirmed blocks, so it should not be used in any processes or integrations requiring only details from blocks confirmed by the network. 
     * @param accountsBalancesRequest 
     */
    public async accountsBalances(accountsBalancesRequest?: AccountsBalancesRequest, options?: Configuration): Promise<RequestContext> {
		let config = options || this.configuration;
		
		
		// Path Params
    	const localVarPath = '/#accounts_balances';

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
            ObjectSerializer.serialize(accountsBalancesRequest, "AccountsBalancesRequest", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        // Apply auth methods

        return requestContext;
    }

    /**
     * Returns a list of pairs of account and block hash representing the head block for **accounts list**  This call may return results that include unconfirmed blocks, so it should not be used in any processes or integrations requiring only details from blocks confirmed by the network. 
     * @param accountsFrontiersRequest 
     */
    public async accountsFrontiers(accountsFrontiersRequest?: AccountsFrontiersRequest, options?: Configuration): Promise<RequestContext> {
		let config = options || this.configuration;
		
		
		// Path Params
    	const localVarPath = '/#accounts_frontiers';

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
            ObjectSerializer.serialize(accountsFrontiersRequest, "AccountsFrontiersRequest", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        // Apply auth methods

        return requestContext;
    }

    /**
     * Returns a list of block hashes which have not yet been received by these accounts
     * @param accountsPendingRequest 
     */
    public async accountsPending(accountsPendingRequest?: AccountsPendingRequest, options?: Configuration): Promise<RequestContext> {
		let config = options || this.configuration;
		
		
		// Path Params
    	const localVarPath = '/#accounts_pending';

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
            ObjectSerializer.serialize(accountsPendingRequest, "AccountsPendingRequest", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        // Apply auth methods

        return requestContext;
    }

    /**
     * Returns the difficulty values (16 hexadecimal digits string, 64 bit) for the minimum required on the network (network_minimum) as well as the current active difficulty seen on the network (network_current, 5 minute trended average of adjusted difficulty seen on confirmed transactions) which can be used to perform rework for better prioritization of transaction processing. A multiplier of the network_current from the base difficulty of network_minimum is also provided for comparison. 
     * @param activeDifficultyRequest 
     */
    public async activeDifficulty(activeDifficultyRequest?: ActiveDifficultyRequest, options?: Configuration): Promise<RequestContext> {
		let config = options || this.configuration;
		
		
		// Path Params
    	const localVarPath = '/#active_difficulty';

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
            ObjectSerializer.serialize(activeDifficultyRequest, "ActiveDifficultyRequest", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        // Apply auth methods

        return requestContext;
    }

    /**
     * Returns how many raw are in the public supply 
     * @param availableSupplyRequest 
     */
    public async availableSupply(availableSupplyRequest?: AvailableSupplyRequest, options?: Configuration): Promise<RequestContext> {
		let config = options || this.configuration;
		
		
		// Path Params
    	const localVarPath = '/#available_supply';

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
            ObjectSerializer.serialize(availableSupplyRequest, "AvailableSupplyRequest", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        // Apply auth methods

        return requestContext;
    }

    /**
     * Returns the account containing block 
     * @param blockAccountRequest 
     */
    public async blockAccount(blockAccountRequest?: BlockAccountRequest, options?: Configuration): Promise<RequestContext> {
		let config = options || this.configuration;
		
		
		// Path Params
    	const localVarPath = '/#block_account';

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
            ObjectSerializer.serialize(blockAccountRequest, "BlockAccountRequest", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        // Apply auth methods

        return requestContext;
    }

    /**
     * Request confirmation for **block** from known online representative nodes. Check results with confirmation history. 
     * @param blockConfirmRequest 
     */
    public async blockConfirm(blockConfirmRequest?: BlockConfirmRequest, options?: Configuration): Promise<RequestContext> {
		let config = options || this.configuration;
		
		
		// Path Params
    	const localVarPath = '/#block_confirm';

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
            ObjectSerializer.serialize(blockConfirmRequest, "BlockConfirmRequest", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        // Apply auth methods

        return requestContext;
    }

    /**
     * Reports the number of blocks in the ledger and unchecked synchronizing blocks. 
     * @param blockCountRequest 
     */
    public async blockCount(blockCountRequest?: BlockCountRequest, options?: Configuration): Promise<RequestContext> {
		let config = options || this.configuration;
		
		
		// Path Params
    	const localVarPath = '/#block_count';

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
            ObjectSerializer.serialize(blockCountRequest, "BlockCountRequest", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        // Apply auth methods

        return requestContext;
    }

    /**
     * Reports the number of blocks in the ledger by type (send, receive, open, change, state with version) 
     * @param blockCountTypeRequest 
     */
    public async blockCountType(blockCountTypeRequest?: BlockCountTypeRequest, options?: Configuration): Promise<RequestContext> {
		let config = options || this.configuration;
		
		
		// Path Params
    	const localVarPath = '/#block_count_type';

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
            ObjectSerializer.serialize(blockCountTypeRequest, "BlockCountTypeRequest", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        // Apply auth methods

        return requestContext;
    }

    /**
     * Creates a json representations of new block based on input data & signed with **private key** or **account** in **wallet**. Use for offline signing. 
     * @param blockCreateRequest 
     */
    public async blockCreate(blockCreateRequest?: BlockCreateRequest, options?: Configuration): Promise<RequestContext> {
		let config = options || this.configuration;
		
		
		// Path Params
    	const localVarPath = '/#block_create';

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
            ObjectSerializer.serialize(blockCreateRequest, "BlockCreateRequest", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        // Apply auth methods

        return requestContext;
    }

    /**
     * Returning block hash for given block content. Using the optional **json_block** is recommended since v19.0. 
     * @param blockHashRequest 
     */
    public async blockHash(blockHashRequest?: BlockHashRequest, options?: Configuration): Promise<RequestContext> {
		let config = options || this.configuration;
		
		
		// Path Params
    	const localVarPath = '/#block_hash';

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
            ObjectSerializer.serialize(blockHashRequest, "BlockHashRequest", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        // Apply auth methods

        return requestContext;
    }

    /**
     * Retrieves a json representation of the block in `contents` along with:  * _since version 18.0_: `block_account`, transaction `amount`, block `balance`, block `height` in account chain, block local modification `timestamp` * _since version 19.0_: Whether block was `confirmed`, `subtype` (for state blocks) of `send`, `receive`,  `change` or `epoch`  Using the optional `json_block` is recommended since v19.0. 
     * @param blockInfoRequest 
     */
    public async blockInfo(blockInfoRequest?: BlockInfoRequest, options?: Configuration): Promise<RequestContext> {
		let config = options || this.configuration;
		
		
		// Path Params
    	const localVarPath = '/#block_info';

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
            ObjectSerializer.serialize(blockInfoRequest, "BlockInfoRequest", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        // Apply auth methods

        return requestContext;
    }

    /**
     * Retrieves a json representations of **blocks**. 
     * @param blocksRequest 
     */
    public async blocks(blocksRequest?: BlocksRequest, options?: Configuration): Promise<RequestContext> {
		let config = options || this.configuration;
		
		
		// Path Params
    	const localVarPath = '/#blocks';

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
            ObjectSerializer.serialize(blocksRequest, "BlocksRequest", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        // Apply auth methods

        return requestContext;
    }

    /**
     * Retrieves a json representations of blocks in contents along with:  * _since version 18.0_: `block_account`, transaction `amount`, block `balance`, block `height` in account chain, block local modification  timestamp * _since version 19.0_: Whether block was `confirmed`, `subtype` (for state blocks) of `send`, `receive`, `change` or `epoch` 
     * @param blocksInfoRequest 
     */
    public async blocksInfo(blocksInfoRequest?: BlocksInfoRequest, options?: Configuration): Promise<RequestContext> {
		let config = options || this.configuration;
		
		
		// Path Params
    	const localVarPath = '/#blocks_info';

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
            ObjectSerializer.serialize(blocksInfoRequest, "BlocksInfoRequest", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        // Apply auth methods

        return requestContext;
    }

    /**
     * Initialize bootstrap to specific **IP address** and **port**. Not compatible with launch flag [--disable_legacy_bootstrap](https://docs.nano.org/commands/command-line-interface/#-disable_legacy_bootstrap) 
     * @param bootstrapRequest 
     */
    public async bootstrap(bootstrapRequest?: BootstrapRequest, options?: Configuration): Promise<RequestContext> {
		let config = options || this.configuration;
		
		
		// Path Params
    	const localVarPath = '/#bootstrap';

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
            ObjectSerializer.serialize(bootstrapRequest, "BootstrapRequest", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        // Apply auth methods

        return requestContext;
    }

    /**
     * Initialize multi-connection bootstrap to random peers. Not compatible with launch flag [--disable_legacy_bootstrap](https://docs.nano.org/commands/command-line-interface/#-disable_legacy_bootstrap) 
     * @param bootstrapAnyRequest 
     */
    public async bootstrapAny(bootstrapAnyRequest?: BootstrapAnyRequest, options?: Configuration): Promise<RequestContext> {
		let config = options || this.configuration;
		
		
		// Path Params
    	const localVarPath = '/#bootstrap_any';

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
            ObjectSerializer.serialize(bootstrapAnyRequest, "BootstrapAnyRequest", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        // Apply auth methods

        return requestContext;
    }

    /**
     * _version 17.0+_  Initialize lazy bootstrap with given block hash. Not compatible with launch flag [--disable_lazy_bootstrap](https://docs.nano.org/commands/command-line-interface/#-disable_lazy_bootstrap) 
     * @param bootstrapLazyRequest 
     */
    public async bootstrapLazy(bootstrapLazyRequest?: BootstrapLazyRequest, options?: Configuration): Promise<RequestContext> {
		let config = options || this.configuration;
		
		
		// Path Params
    	const localVarPath = '/#bootstrap_lazy';

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
            ObjectSerializer.serialize(bootstrapLazyRequest, "BootstrapLazyRequest", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        // Apply auth methods

        return requestContext;
    }

    /**
     * Returns a consecutive list of block hashes in the account chain starting at **block** back to **count** (direction from frontier back to open block, from newer blocks to older). Will list all blocks back to the open block of this chain when count is set to \"-1\". The requested block hash is included in the answer. 
     * @param chainRequest 
     */
    public async chain(chainRequest?: ChainRequest, options?: Configuration): Promise<RequestContext> {
		let config = options || this.configuration;
		
		
		// Path Params
    	const localVarPath = '/#chain';

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
            ObjectSerializer.serialize(chainRequest, "ChainRequest", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        // Apply auth methods

        return requestContext;
    }

    /**
     * _version 16.0+_  Returns list of active elections roots (excluding stopped & aborted elections). Find info about specific root with confirmation_info  The roots provided are two parts and differ between the first account block and subsequent blocks:  * First account block (open): 0000000000000000000000000000000000000000000000000000000000000000 + account public key * Other blocks: previous hash + previous hash 
     * @param confirmationActiveRequest 
     */
    public async confirmationActive(confirmationActiveRequest?: ConfirmationActiveRequest, options?: Configuration): Promise<RequestContext> {
		let config = options || this.configuration;
		
		
		// Path Params
    	const localVarPath = '/#confirmation_active';

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
            ObjectSerializer.serialize(confirmationActiveRequest, "ConfirmationActiveRequest", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        // Apply auth methods

        return requestContext;
    }

    /**
     * _version 12.0+_ _duration, time, confirmation_stats: version 17.0+_  Returns hash, tally weight, election duration (in milliseconds), election confirmation timestamp for recent elections winners. Also returns stats: count of elections in history (limited to 2048) & average duration time  With version 19.0+ `confirmation_history_size` can be managed in [config.json](https://docs.nano.org/running-a-node/configuration/#example-file) to adjust the number of elections to be kept in history and returned by this call. Due to timings inside the node, the default 2048 limit will return all confirmations up to traffic levels of  approximately 56 confirmations/sec. To properly track levels above this, increase this value or use the confirmation subscription through the [websocket](https://docs.nano.org/integration-guides/advanced/#websocket-support) instead. 
     * @param confirmationHistoryRequest 
     */
    public async confirmationHistory(confirmationHistoryRequest?: ConfirmationHistoryRequest, options?: Configuration): Promise<RequestContext> {
		let config = options || this.configuration;
		
		
		// Path Params
    	const localVarPath = '/#confirmation_history';

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
            ObjectSerializer.serialize(confirmationHistoryRequest, "ConfirmationHistoryRequest", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        // Apply auth methods

        return requestContext;
    }

    /**
     * _version 16.0+_  Returns info about active election by *root*. Including announcements count, last winner (initially local ledger block), total tally of voted representatives, concurrent blocks with tally & block contents for each. Using the optional `json_block` is recommended since v19.0.  The roots provided are two parts and differ between the first account block and subsequent blocks:  * First account block (open): 0000000000000000000000000000000000000000000000000000000000000000 + account public key * Other blocks: previous hash + previous hash 
     * @param confirmationInfoRequest 
     */
    public async confirmationInfo(confirmationInfoRequest?: ConfirmationInfoRequest, options?: Configuration): Promise<RequestContext> {
		let config = options || this.configuration;
		
		
		// Path Params
    	const localVarPath = '/#confirmation_info';

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
            ObjectSerializer.serialize(confirmationInfoRequest, "ConfirmationInfoRequest", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        // Apply auth methods

        return requestContext;
    }

    /**
     * Generates an **adhoc random** keypair 
     * @param keyCreateRequest 
     */
    public async keyCreate(keyCreateRequest?: KeyCreateRequest, options?: Configuration): Promise<RequestContext> {
		let config = options || this.configuration;
		
		
		// Path Params
    	const localVarPath = '/#key_create';

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
            ObjectSerializer.serialize(keyCreateRequest, "KeyCreateRequest", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        // Apply auth methods

        return requestContext;
    }

    /**
     * Derive public key and account number from **private key** 
     * @param keyExpandRequest 
     */
    public async keyExpand(keyExpandRequest?: KeyExpandRequest, options?: Configuration): Promise<RequestContext> {
		let config = options || this.configuration;
		
		
		// Path Params
    	const localVarPath = '/#key_expand';

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
            ObjectSerializer.serialize(keyExpandRequest, "KeyExpandRequest", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        // Apply auth methods

        return requestContext;
    }

    /**
     * Returns a list of block hashes which have not yet been received by this account.  **Optional `include_only_confirmed` recommended**:  By default this will return blocks not in active elections but unconfirmed (e.g., block was received but node was restarted, election was dropped, new ledger with reset confirmation height).  **To avoid potential issues related to these situations setting the include_only_confirmed = true is recommended for most use cases.** 
     * @param pendingRequest 
     */
    public async pending(pendingRequest?: PendingRequest, options?: Configuration): Promise<RequestContext> {
		let config = options || this.configuration;
		
		
		// Path Params
    	const localVarPath = '/#pending';

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
            ObjectSerializer.serialize(pendingRequest, "PendingRequest", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        // Apply auth methods

        return requestContext;
    }

    /**
     * Publish block to the network
     * @param processRequest 
     */
    public async process(processRequest?: ProcessRequest, options?: Configuration): Promise<RequestContext> {
		let config = options || this.configuration;
		
		
		// Path Params
    	const localVarPath = '/#process';

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
            ObjectSerializer.serialize(processRequest, "ProcessRequest", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        // Apply auth methods

        return requestContext;
    }

    /**
     * Generates work for block. hash is the frontier of the account or in the case of an open block, the public key representation of the account which can be found with account_key 
     * @param workGenerateRequest 
     */
    public async workGenerate(workGenerateRequest?: WorkGenerateRequest, options?: Configuration): Promise<RequestContext> {
		let config = options || this.configuration;
		
		
		// Path Params
    	const localVarPath = '/#work_generate';

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
            ObjectSerializer.serialize(workGenerateRequest, "WorkGenerateRequest", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        // Apply auth methods

        return requestContext;
    }

}



export class NodeRPCsApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to accountBalance
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async accountBalance(response: ResponseContext): Promise<AccountBalanceResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: AccountBalanceResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AccountBalanceResponse", ""
            ) as AccountBalanceResponse;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: AccountBalanceResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AccountBalanceResponse", ""
            ) as AccountBalanceResponse;
            return body;
        }

        let body = response.body || "";
    	throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }
			
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to accountBlockCount
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async accountBlockCount(response: ResponseContext): Promise<AccountBlockCountResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: AccountBlockCountResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AccountBlockCountResponse", ""
            ) as AccountBlockCountResponse;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: AccountBlockCountResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AccountBlockCountResponse", ""
            ) as AccountBlockCountResponse;
            return body;
        }

        let body = response.body || "";
    	throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }
			
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to accountGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async accountGet(response: ResponseContext): Promise<AccountGetResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: AccountGetResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AccountGetResponse", ""
            ) as AccountGetResponse;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: AccountGetResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AccountGetResponse", ""
            ) as AccountGetResponse;
            return body;
        }

        let body = response.body || "";
    	throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }
			
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to accountHistory
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async accountHistory(response: ResponseContext): Promise<AccountHistoryResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: AccountHistoryResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AccountHistoryResponse", ""
            ) as AccountHistoryResponse;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: AccountHistoryResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AccountHistoryResponse", ""
            ) as AccountHistoryResponse;
            return body;
        }

        let body = response.body || "";
    	throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }
			
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to accountInfo
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async accountInfo(response: ResponseContext): Promise<AccountInfoResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: AccountInfoResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AccountInfoResponse", ""
            ) as AccountInfoResponse;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: AccountInfoResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AccountInfoResponse", ""
            ) as AccountInfoResponse;
            return body;
        }

        let body = response.body || "";
    	throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }
			
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to accountKey
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async accountKey(response: ResponseContext): Promise<AccountKeyResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: AccountKeyResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AccountKeyResponse", ""
            ) as AccountKeyResponse;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: AccountKeyResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AccountKeyResponse", ""
            ) as AccountKeyResponse;
            return body;
        }

        let body = response.body || "";
    	throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }
			
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to accountRepresentative
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async accountRepresentative(response: ResponseContext): Promise<AccountRepresentativeResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: AccountRepresentativeResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AccountRepresentativeResponse", ""
            ) as AccountRepresentativeResponse;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: AccountRepresentativeResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AccountRepresentativeResponse", ""
            ) as AccountRepresentativeResponse;
            return body;
        }

        let body = response.body || "";
    	throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }
			
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to accountWeight
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async accountWeight(response: ResponseContext): Promise<AccountWeightResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: AccountWeightResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AccountWeightResponse", ""
            ) as AccountWeightResponse;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: AccountWeightResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AccountWeightResponse", ""
            ) as AccountWeightResponse;
            return body;
        }

        let body = response.body || "";
    	throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }
			
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to accountsBalances
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async accountsBalances(response: ResponseContext): Promise<AccountsBalancesResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: AccountsBalancesResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AccountsBalancesResponse", ""
            ) as AccountsBalancesResponse;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: AccountsBalancesResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AccountsBalancesResponse", ""
            ) as AccountsBalancesResponse;
            return body;
        }

        let body = response.body || "";
    	throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }
			
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to accountsFrontiers
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async accountsFrontiers(response: ResponseContext): Promise<AccountsFrontiersResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: AccountsFrontiersResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AccountsFrontiersResponse", ""
            ) as AccountsFrontiersResponse;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: AccountsFrontiersResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AccountsFrontiersResponse", ""
            ) as AccountsFrontiersResponse;
            return body;
        }

        let body = response.body || "";
    	throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }
			
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to accountsPending
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async accountsPending(response: ResponseContext): Promise<AccountsPendingResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: AccountsPendingResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AccountsPendingResponse", ""
            ) as AccountsPendingResponse;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: AccountsPendingResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AccountsPendingResponse", ""
            ) as AccountsPendingResponse;
            return body;
        }

        let body = response.body || "";
    	throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }
			
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to activeDifficulty
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async activeDifficulty(response: ResponseContext): Promise<ActiveDifficultyResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ActiveDifficultyResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ActiveDifficultyResponse", ""
            ) as ActiveDifficultyResponse;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ActiveDifficultyResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ActiveDifficultyResponse", ""
            ) as ActiveDifficultyResponse;
            return body;
        }

        let body = response.body || "";
    	throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }
			
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to availableSupply
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async availableSupply(response: ResponseContext): Promise<AvailableSupplyResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: AvailableSupplyResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AvailableSupplyResponse", ""
            ) as AvailableSupplyResponse;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: AvailableSupplyResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AvailableSupplyResponse", ""
            ) as AvailableSupplyResponse;
            return body;
        }

        let body = response.body || "";
    	throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }
			
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to blockAccount
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async blockAccount(response: ResponseContext): Promise<BlockAccountResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: BlockAccountResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BlockAccountResponse", ""
            ) as BlockAccountResponse;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: BlockAccountResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BlockAccountResponse", ""
            ) as BlockAccountResponse;
            return body;
        }

        let body = response.body || "";
    	throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }
			
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to blockConfirm
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async blockConfirm(response: ResponseContext): Promise<BlockConfirmResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: BlockConfirmResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BlockConfirmResponse", ""
            ) as BlockConfirmResponse;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: BlockConfirmResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BlockConfirmResponse", ""
            ) as BlockConfirmResponse;
            return body;
        }

        let body = response.body || "";
    	throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }
			
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to blockCount
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async blockCount(response: ResponseContext): Promise<BlockCountResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: BlockCountResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BlockCountResponse", ""
            ) as BlockCountResponse;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: BlockCountResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BlockCountResponse", ""
            ) as BlockCountResponse;
            return body;
        }

        let body = response.body || "";
    	throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }
			
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to blockCountType
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async blockCountType(response: ResponseContext): Promise<BlockCountTypeResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: BlockCountTypeResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BlockCountTypeResponse", ""
            ) as BlockCountTypeResponse;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: BlockCountTypeResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BlockCountTypeResponse", ""
            ) as BlockCountTypeResponse;
            return body;
        }

        let body = response.body || "";
    	throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }
			
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to blockCreate
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async blockCreate(response: ResponseContext): Promise<BlockCreateResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: BlockCreateResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BlockCreateResponse", ""
            ) as BlockCreateResponse;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: BlockCreateResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BlockCreateResponse", ""
            ) as BlockCreateResponse;
            return body;
        }

        let body = response.body || "";
    	throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }
			
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to blockHash
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async blockHash(response: ResponseContext): Promise<BlockHashResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: BlockHashResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BlockHashResponse", ""
            ) as BlockHashResponse;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: BlockHashResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BlockHashResponse", ""
            ) as BlockHashResponse;
            return body;
        }

        let body = response.body || "";
    	throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }
			
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to blockInfo
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async blockInfo(response: ResponseContext): Promise<BlockInfoResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: BlockInfoResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BlockInfoResponse", ""
            ) as BlockInfoResponse;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: BlockInfoResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BlockInfoResponse", ""
            ) as BlockInfoResponse;
            return body;
        }

        let body = response.body || "";
    	throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }
			
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to blocks
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async blocks(response: ResponseContext): Promise<BlocksResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: BlocksResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BlocksResponse", ""
            ) as BlocksResponse;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: BlocksResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BlocksResponse", ""
            ) as BlocksResponse;
            return body;
        }

        let body = response.body || "";
    	throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }
			
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to blocksInfo
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async blocksInfo(response: ResponseContext): Promise<BlocksInfoResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: BlocksInfoResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BlocksInfoResponse", ""
            ) as BlocksInfoResponse;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: BlocksInfoResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BlocksInfoResponse", ""
            ) as BlocksInfoResponse;
            return body;
        }

        let body = response.body || "";
    	throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }
			
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to bootstrap
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async bootstrap(response: ResponseContext): Promise<BootstrapResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: BootstrapResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BootstrapResponse", ""
            ) as BootstrapResponse;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: BootstrapResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BootstrapResponse", ""
            ) as BootstrapResponse;
            return body;
        }

        let body = response.body || "";
    	throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }
			
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to bootstrapAny
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async bootstrapAny(response: ResponseContext): Promise<BootstrapAnyResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: BootstrapAnyResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BootstrapAnyResponse", ""
            ) as BootstrapAnyResponse;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: BootstrapAnyResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BootstrapAnyResponse", ""
            ) as BootstrapAnyResponse;
            return body;
        }

        let body = response.body || "";
    	throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }
			
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to bootstrapLazy
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async bootstrapLazy(response: ResponseContext): Promise<BootstrapLazyResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: BootstrapLazyResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BootstrapLazyResponse", ""
            ) as BootstrapLazyResponse;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: BootstrapLazyResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BootstrapLazyResponse", ""
            ) as BootstrapLazyResponse;
            return body;
        }

        let body = response.body || "";
    	throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }
			
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to chain
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async chain(response: ResponseContext): Promise<ChainResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ChainResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ChainResponse", ""
            ) as ChainResponse;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ChainResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ChainResponse", ""
            ) as ChainResponse;
            return body;
        }

        let body = response.body || "";
    	throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }
			
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to confirmationActive
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async confirmationActive(response: ResponseContext): Promise<ConfirmationActiveResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ConfirmationActiveResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ConfirmationActiveResponse", ""
            ) as ConfirmationActiveResponse;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ConfirmationActiveResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ConfirmationActiveResponse", ""
            ) as ConfirmationActiveResponse;
            return body;
        }

        let body = response.body || "";
    	throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }
			
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to confirmationHistory
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async confirmationHistory(response: ResponseContext): Promise<ConfirmationHistoryResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ConfirmationHistoryResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ConfirmationHistoryResponse", ""
            ) as ConfirmationHistoryResponse;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ConfirmationHistoryResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ConfirmationHistoryResponse", ""
            ) as ConfirmationHistoryResponse;
            return body;
        }

        let body = response.body || "";
    	throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }
			
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to confirmationInfo
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async confirmationInfo(response: ResponseContext): Promise<ConfirmationInfoResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ConfirmationInfoResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ConfirmationInfoResponse", ""
            ) as ConfirmationInfoResponse;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ConfirmationInfoResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ConfirmationInfoResponse", ""
            ) as ConfirmationInfoResponse;
            return body;
        }

        let body = response.body || "";
    	throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }
			
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to keyCreate
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async keyCreate(response: ResponseContext): Promise<KeyCreateResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: KeyCreateResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "KeyCreateResponse", ""
            ) as KeyCreateResponse;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: KeyCreateResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "KeyCreateResponse", ""
            ) as KeyCreateResponse;
            return body;
        }

        let body = response.body || "";
    	throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }
			
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to keyExpand
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async keyExpand(response: ResponseContext): Promise<KeyExpandResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: KeyExpandResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "KeyExpandResponse", ""
            ) as KeyExpandResponse;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: KeyExpandResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "KeyExpandResponse", ""
            ) as KeyExpandResponse;
            return body;
        }

        let body = response.body || "";
    	throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }
			
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to pending
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async pending(response: ResponseContext): Promise<PendingResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: PendingResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PendingResponse", ""
            ) as PendingResponse;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: PendingResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PendingResponse", ""
            ) as PendingResponse;
            return body;
        }

        let body = response.body || "";
    	throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }
			
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to process
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async process(response: ResponseContext): Promise<ProcessResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ProcessResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ProcessResponse", ""
            ) as ProcessResponse;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ProcessResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ProcessResponse", ""
            ) as ProcessResponse;
            return body;
        }

        let body = response.body || "";
    	throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }
			
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to workGenerate
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async workGenerate(response: ResponseContext): Promise<WorkGenerateResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: WorkGenerateResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "WorkGenerateResponse", ""
            ) as WorkGenerateResponse;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: WorkGenerateResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "WorkGenerateResponse", ""
            ) as WorkGenerateResponse;
            return body;
        }

        let body = response.body || "";
    	throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }
			
}
