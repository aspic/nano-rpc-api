import { ResponseContext, RequestContext, HttpFile } from '../http/http';
import * as models from '../models/all';
import { Configuration} from '../configuration'

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
import { AccountsCreateRequest } from '../models/AccountsCreateRequest';
import { AccountsCreateResponse } from '../models/AccountsCreateResponse';
import { AccountsFrontiersRequest } from '../models/AccountsFrontiersRequest';
import { AccountsFrontiersResponse } from '../models/AccountsFrontiersResponse';
import { AccountsPendingRequest } from '../models/AccountsPendingRequest';
import { AccountsPendingResponse } from '../models/AccountsPendingResponse';
import { ActiveDifficultyRequest } from '../models/ActiveDifficultyRequest';
import { ActiveDifficultyResponse } from '../models/ActiveDifficultyResponse';
import { AvailableSupplyRequest } from '../models/AvailableSupplyRequest';
import { AvailableSupplyResponse } from '../models/AvailableSupplyResponse';
import { Block } from '../models/Block';
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
import { BlockDataJson } from '../models/BlockDataJson';
import { BlockHashRequest } from '../models/BlockHashRequest';
import { BlockHashResponse } from '../models/BlockHashResponse';
import { BlockInfo } from '../models/BlockInfo';
import { BlockInfoRequest } from '../models/BlockInfoRequest';
import { BlockInfoResponse } from '../models/BlockInfoResponse';
import { BlockState } from '../models/BlockState';
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
import { Confirmation } from '../models/Confirmation';
import { ConfirmationActiveRequest } from '../models/ConfirmationActiveRequest';
import { ConfirmationActiveResponse } from '../models/ConfirmationActiveResponse';
import { ConfirmationHeightCurrentlyProcessingRequest } from '../models/ConfirmationHeightCurrentlyProcessingRequest';
import { ConfirmationHeightCurrentlyProcessingResponse } from '../models/ConfirmationHeightCurrentlyProcessingResponse';
import { ConfirmationHistoryRequest } from '../models/ConfirmationHistoryRequest';
import { ConfirmationHistoryResponse } from '../models/ConfirmationHistoryResponse';
import { ConfirmationHistoryResponseConfirmationStats } from '../models/ConfirmationHistoryResponseConfirmationStats';
import { ConfirmationInfo } from '../models/ConfirmationInfo';
import { ConfirmationInfoRequest } from '../models/ConfirmationInfoRequest';
import { ConfirmationInfoResponse } from '../models/ConfirmationInfoResponse';
import { KeyCreateRequest } from '../models/KeyCreateRequest';
import { KeyCreateResponse } from '../models/KeyCreateResponse';
import { KeyExpandRequest } from '../models/KeyExpandRequest';
import { KeyExpandResponse } from '../models/KeyExpandResponse';
import { ModelBoolean } from '../models/ModelBoolean';
import { PendingBlock } from '../models/PendingBlock';
import { PendingRequest } from '../models/PendingRequest';
import { PendingResponse } from '../models/PendingResponse';
import { ProcessRequest } from '../models/ProcessRequest';
import { ProcessResponse } from '../models/ProcessResponse';
import { ReceiveRequest } from '../models/ReceiveRequest';
import { ReceiveResponse } from '../models/ReceiveResponse';
import { SubType } from '../models/SubType';
import { WalletCreateRequest } from '../models/WalletCreateRequest';
import { WalletCreateResponse } from '../models/WalletCreateResponse';
import { WorkGenerateRequest } from '../models/WorkGenerateRequest';
import { WorkGenerateResponse } from '../models/WorkGenerateResponse';
import { ObservableDebugApi } from './ObservableAPI';


import { DebugApiRequestFactory, DebugApiResponseProcessor} from "../apis/DebugApi";
export class PromiseDebugApi {
    private api: ObservableDebugApi

    public constructor(
        configuration: Configuration,
        requestFactory?: DebugApiRequestFactory,
        responseProcessor?: DebugApiResponseProcessor
    ) {
        this.api = new ObservableDebugApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * _version 19.0+_  Returns the hash of the block which is having the confirmation height set for, error otherwise. When a block is being confirmed, it must confirm all blocks in the chain below and iteratively follow all receive blocks. This can take a long time, so it can be useful to find which block was the original being confirmed. 
     * @param confirmationHeightCurrentlyProcessingRequest 
     */
    public confirmationHeightCurrentlyProcessing(confirmationHeightCurrentlyProcessingRequest?: ConfirmationHeightCurrentlyProcessingRequest, options?: Configuration): Promise<ConfirmationHeightCurrentlyProcessingResponse> {
    	const result = this.api.confirmationHeightCurrentlyProcessing(confirmationHeightCurrentlyProcessingRequest, options);
        return result.toPromise();
    }
	

}



import { ObservableNodeRPCsApi } from './ObservableAPI';


import { NodeRPCsApiRequestFactory, NodeRPCsApiResponseProcessor} from "../apis/NodeRPCsApi";
export class PromiseNodeRPCsApi {
    private api: ObservableNodeRPCsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: NodeRPCsApiRequestFactory,
        responseProcessor?: NodeRPCsApiResponseProcessor
    ) {
        this.api = new ObservableNodeRPCsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Returns how many RAW is owned and how many have not yet been received by **account** > This call may return results that include unconfirmed blocks, so it should not be used in any processes or integrations requiring only details from blocks confirmed by the network. 
     * @param accountBalanceRequest 
     */
    public accountBalance(accountBalanceRequest?: AccountBalanceRequest, options?: Configuration): Promise<AccountBalanceResponse> {
    	const result = this.api.accountBalance(accountBalanceRequest, options);
        return result.toPromise();
    }
	
    /**
     * Get number of blocks for a specific account
     * @param accountBlockCountRequest 
     */
    public accountBlockCount(accountBlockCountRequest?: AccountBlockCountRequest, options?: Configuration): Promise<AccountBlockCountResponse> {
    	const result = this.api.accountBlockCount(accountBlockCountRequest, options);
        return result.toPromise();
    }
	
    /**
     * Get account for the public key
     * @param accountGetRequest 
     */
    public accountGet(accountGetRequest?: AccountGetRequest, options?: Configuration): Promise<AccountGetResponse> {
    	const result = this.api.accountGet(accountGetRequest, options);
        return result.toPromise();
    }
	
    /**
     * Gets the account history. Reports send/receive information for an account. 
     * @param accountHistoryRequest 
     */
    public accountHistory(accountHistoryRequest?: AccountHistoryRequest, options?: Configuration): Promise<AccountHistoryResponse> {
    	const result = this.api.accountHistory(accountHistoryRequest, options);
        return result.toPromise();
    }
	
    /**
     * Returns frontier, open block, change representative block, balance, last modified timestamp from local database & block count for **account**. Only works for accounts that have an entry on the ledger, will return _Account not found_ otherwise. 
     * @param accountInfoRequest 
     */
    public accountInfo(accountInfoRequest?: AccountInfoRequest, options?: Configuration): Promise<AccountInfoResponse> {
    	const result = this.api.accountInfo(accountInfoRequest, options);
        return result.toPromise();
    }
	
    /**
     * Get the public key for **account** 
     * @param accountKeyRequest 
     */
    public accountKey(accountKeyRequest?: AccountKeyRequest, options?: Configuration): Promise<AccountKeyResponse> {
    	const result = this.api.accountKey(accountKeyRequest, options);
        return result.toPromise();
    }
	
    /**
     * Returns the representative for **account** 
     * @param accountRepresentativeRequest 
     */
    public accountRepresentative(accountRepresentativeRequest?: AccountRepresentativeRequest, options?: Configuration): Promise<AccountRepresentativeResponse> {
    	const result = this.api.accountRepresentative(accountRepresentativeRequest, options);
        return result.toPromise();
    }
	
    /**
     * Returns the voting weight for **account** 
     * @param accountWeightRequest 
     */
    public accountWeight(accountWeightRequest?: AccountWeightRequest, options?: Configuration): Promise<AccountWeightResponse> {
    	const result = this.api.accountWeight(accountWeightRequest, options);
        return result.toPromise();
    }
	
    /**
     * Returns how many RAW is owned and how many have not yet been received by **accounts list**  This call may return results that include unconfirmed blocks, so it should not be used in any processes or integrations requiring only details from blocks confirmed by the network. 
     * @param accountsBalancesRequest 
     */
    public accountsBalances(accountsBalancesRequest?: AccountsBalancesRequest, options?: Configuration): Promise<AccountsBalancesResponse> {
    	const result = this.api.accountsBalances(accountsBalancesRequest, options);
        return result.toPromise();
    }
	
    /**
     * Returns a list of pairs of account and block hash representing the head block for **accounts list**  This call may return results that include unconfirmed blocks, so it should not be used in any processes or integrations requiring only details from blocks confirmed by the network. 
     * @param accountsFrontiersRequest 
     */
    public accountsFrontiers(accountsFrontiersRequest?: AccountsFrontiersRequest, options?: Configuration): Promise<AccountsFrontiersResponse> {
    	const result = this.api.accountsFrontiers(accountsFrontiersRequest, options);
        return result.toPromise();
    }
	
    /**
     * Returns a list of block hashes which have not yet been received by these accounts
     * @param accountsPendingRequest 
     */
    public accountsPending(accountsPendingRequest?: AccountsPendingRequest, options?: Configuration): Promise<AccountsPendingResponse> {
    	const result = this.api.accountsPending(accountsPendingRequest, options);
        return result.toPromise();
    }
	
    /**
     * Returns the difficulty values (16 hexadecimal digits string, 64 bit) for the minimum required on the network (network_minimum) as well as the current active difficulty seen on the network (network_current, 5 minute trended average of adjusted difficulty seen on confirmed transactions) which can be used to perform rework for better prioritization of transaction processing. A multiplier of the network_current from the base difficulty of network_minimum is also provided for comparison. 
     * @param activeDifficultyRequest 
     */
    public activeDifficulty(activeDifficultyRequest?: ActiveDifficultyRequest, options?: Configuration): Promise<ActiveDifficultyResponse> {
    	const result = this.api.activeDifficulty(activeDifficultyRequest, options);
        return result.toPromise();
    }
	
    /**
     * Returns how many raw are in the public supply 
     * @param availableSupplyRequest 
     */
    public availableSupply(availableSupplyRequest?: AvailableSupplyRequest, options?: Configuration): Promise<AvailableSupplyResponse> {
    	const result = this.api.availableSupply(availableSupplyRequest, options);
        return result.toPromise();
    }
	
    /**
     * Returns the account containing block 
     * @param blockAccountRequest 
     */
    public blockAccount(blockAccountRequest?: BlockAccountRequest, options?: Configuration): Promise<BlockAccountResponse> {
    	const result = this.api.blockAccount(blockAccountRequest, options);
        return result.toPromise();
    }
	
    /**
     * Request confirmation for **block** from known online representative nodes. Check results with confirmation history. 
     * @param blockConfirmRequest 
     */
    public blockConfirm(blockConfirmRequest?: BlockConfirmRequest, options?: Configuration): Promise<BlockConfirmResponse> {
    	const result = this.api.blockConfirm(blockConfirmRequest, options);
        return result.toPromise();
    }
	
    /**
     * Reports the number of blocks in the ledger and unchecked synchronizing blocks. 
     * @param blockCountRequest 
     */
    public blockCount(blockCountRequest?: BlockCountRequest, options?: Configuration): Promise<BlockCountResponse> {
    	const result = this.api.blockCount(blockCountRequest, options);
        return result.toPromise();
    }
	
    /**
     * Reports the number of blocks in the ledger by type (send, receive, open, change, state with version) 
     * @param blockCountTypeRequest 
     */
    public blockCountType(blockCountTypeRequest?: BlockCountTypeRequest, options?: Configuration): Promise<BlockCountTypeResponse> {
    	const result = this.api.blockCountType(blockCountTypeRequest, options);
        return result.toPromise();
    }
	
    /**
     * Creates a json representations of new block based on input data & signed with **private key** or **account** in **wallet**. Use for offline signing. 
     * @param blockCreateRequest 
     */
    public blockCreate(blockCreateRequest?: BlockCreateRequest, options?: Configuration): Promise<BlockCreateResponse> {
    	const result = this.api.blockCreate(blockCreateRequest, options);
        return result.toPromise();
    }
	
    /**
     * Returning block hash for given block content. Using the optional **json_block** is recommended since v19.0. 
     * @param blockHashRequest 
     */
    public blockHash(blockHashRequest?: BlockHashRequest, options?: Configuration): Promise<BlockHashResponse> {
    	const result = this.api.blockHash(blockHashRequest, options);
        return result.toPromise();
    }
	
    /**
     * Retrieves a json representation of the block in `contents` along with:  * _since version 18.0_: `block_account`, transaction `amount`, block `balance`, block `height` in account chain, block local modification `timestamp` * _since version 19.0_: Whether block was `confirmed`, `subtype` (for state blocks) of `send`, `receive`,  `change` or `epoch`  Using the optional `json_block` is recommended since v19.0. 
     * @param blockInfoRequest 
     */
    public blockInfo(blockInfoRequest?: BlockInfoRequest, options?: Configuration): Promise<BlockInfoResponse> {
    	const result = this.api.blockInfo(blockInfoRequest, options);
        return result.toPromise();
    }
	
    /**
     * Retrieves a json representations of **blocks**. 
     * @param blocksRequest 
     */
    public blocks(blocksRequest?: BlocksRequest, options?: Configuration): Promise<BlocksResponse> {
    	const result = this.api.blocks(blocksRequest, options);
        return result.toPromise();
    }
	
    /**
     * Retrieves a json representations of blocks in contents along with:  * _since version 18.0_: `block_account`, transaction `amount`, block `balance`, block `height` in account chain, block local modification  timestamp * _since version 19.0_: Whether block was `confirmed`, `subtype` (for state blocks) of `send`, `receive`, `change` or `epoch` 
     * @param blocksInfoRequest 
     */
    public blocksInfo(blocksInfoRequest?: BlocksInfoRequest, options?: Configuration): Promise<BlocksInfoResponse> {
    	const result = this.api.blocksInfo(blocksInfoRequest, options);
        return result.toPromise();
    }
	
    /**
     * Initialize bootstrap to specific **IP address** and **port**. Not compatible with launch flag [--disable_legacy_bootstrap](https://docs.nano.org/commands/command-line-interface/#-disable_legacy_bootstrap) 
     * @param bootstrapRequest 
     */
    public bootstrap(bootstrapRequest?: BootstrapRequest, options?: Configuration): Promise<BootstrapResponse> {
    	const result = this.api.bootstrap(bootstrapRequest, options);
        return result.toPromise();
    }
	
    /**
     * Initialize multi-connection bootstrap to random peers. Not compatible with launch flag [--disable_legacy_bootstrap](https://docs.nano.org/commands/command-line-interface/#-disable_legacy_bootstrap) 
     * @param bootstrapAnyRequest 
     */
    public bootstrapAny(bootstrapAnyRequest?: BootstrapAnyRequest, options?: Configuration): Promise<BootstrapAnyResponse> {
    	const result = this.api.bootstrapAny(bootstrapAnyRequest, options);
        return result.toPromise();
    }
	
    /**
     * _version 17.0+_  Initialize lazy bootstrap with given block hash. Not compatible with launch flag [--disable_lazy_bootstrap](https://docs.nano.org/commands/command-line-interface/#-disable_lazy_bootstrap) 
     * @param bootstrapLazyRequest 
     */
    public bootstrapLazy(bootstrapLazyRequest?: BootstrapLazyRequest, options?: Configuration): Promise<BootstrapLazyResponse> {
    	const result = this.api.bootstrapLazy(bootstrapLazyRequest, options);
        return result.toPromise();
    }
	
    /**
     * Returns a consecutive list of block hashes in the account chain starting at **block** back to **count** (direction from frontier back to open block, from newer blocks to older). Will list all blocks back to the open block of this chain when count is set to \"-1\". The requested block hash is included in the answer. 
     * @param chainRequest 
     */
    public chain(chainRequest?: ChainRequest, options?: Configuration): Promise<ChainResponse> {
    	const result = this.api.chain(chainRequest, options);
        return result.toPromise();
    }
	
    /**
     * _version 16.0+_  Returns list of active elections roots (excluding stopped & aborted elections). Find info about specific root with confirmation_info  The roots provided are two parts and differ between the first account block and subsequent blocks:  * First account block (open): 0000000000000000000000000000000000000000000000000000000000000000 + account public key * Other blocks: previous hash + previous hash 
     * @param confirmationActiveRequest 
     */
    public confirmationActive(confirmationActiveRequest?: ConfirmationActiveRequest, options?: Configuration): Promise<ConfirmationActiveResponse> {
    	const result = this.api.confirmationActive(confirmationActiveRequest, options);
        return result.toPromise();
    }
	
    /**
     * _version 12.0+_ _duration, time, confirmation_stats: version 17.0+_  Returns hash, tally weight, election duration (in milliseconds), election confirmation timestamp for recent elections winners. Also returns stats: count of elections in history (limited to 2048) & average duration time  With version 19.0+ `confirmation_history_size` can be managed in [config.json](https://docs.nano.org/running-a-node/configuration/#example-file) to adjust the number of elections to be kept in history and returned by this call. Due to timings inside the node, the default 2048 limit will return all confirmations up to traffic levels of  approximately 56 confirmations/sec. To properly track levels above this, increase this value or use the confirmation subscription through the [websocket](https://docs.nano.org/integration-guides/advanced/#websocket-support) instead. 
     * @param confirmationHistoryRequest 
     */
    public confirmationHistory(confirmationHistoryRequest?: ConfirmationHistoryRequest, options?: Configuration): Promise<ConfirmationHistoryResponse> {
    	const result = this.api.confirmationHistory(confirmationHistoryRequest, options);
        return result.toPromise();
    }
	
    /**
     * _version 16.0+_  Returns info about active election by *root*. Including announcements count, last winner (initially local ledger block), total tally of voted representatives, concurrent blocks with tally & block contents for each. Using the optional `json_block` is recommended since v19.0.  The roots provided are two parts and differ between the first account block and subsequent blocks:  * First account block (open): 0000000000000000000000000000000000000000000000000000000000000000 + account public key * Other blocks: previous hash + previous hash 
     * @param confirmationInfoRequest 
     */
    public confirmationInfo(confirmationInfoRequest?: ConfirmationInfoRequest, options?: Configuration): Promise<ConfirmationInfoResponse> {
    	const result = this.api.confirmationInfo(confirmationInfoRequest, options);
        return result.toPromise();
    }
	
    /**
     * Generates an **adhoc random** keypair 
     * @param keyCreateRequest 
     */
    public keyCreate(keyCreateRequest?: KeyCreateRequest, options?: Configuration): Promise<KeyCreateResponse> {
    	const result = this.api.keyCreate(keyCreateRequest, options);
        return result.toPromise();
    }
	
    /**
     * Derive public key and account number from **private key** 
     * @param keyExpandRequest 
     */
    public keyExpand(keyExpandRequest?: KeyExpandRequest, options?: Configuration): Promise<KeyExpandResponse> {
    	const result = this.api.keyExpand(keyExpandRequest, options);
        return result.toPromise();
    }
	
    /**
     * Returns a list of block hashes which have not yet been received by this account.  **Optional `include_only_confirmed` recommended**:  By default this will return blocks not in active elections but unconfirmed (e.g., block was received but node was restarted, election was dropped, new ledger with reset confirmation height).  **To avoid potential issues related to these situations setting the include_only_confirmed = true is recommended for most use cases.** 
     * @param pendingRequest 
     */
    public pending(pendingRequest?: PendingRequest, options?: Configuration): Promise<PendingResponse> {
    	const result = this.api.pending(pendingRequest, options);
        return result.toPromise();
    }
	
    /**
     * Publish block to the network
     * @param processRequest 
     */
    public process(processRequest?: ProcessRequest, options?: Configuration): Promise<ProcessResponse> {
    	const result = this.api.process(processRequest, options);
        return result.toPromise();
    }
	
    /**
     * Generates work for block. hash is the frontier of the account or in the case of an open block, the public key representation of the account which can be found with account_key 
     * @param workGenerateRequest 
     */
    public workGenerate(workGenerateRequest?: WorkGenerateRequest, options?: Configuration): Promise<WorkGenerateResponse> {
    	const result = this.api.workGenerate(workGenerateRequest, options);
        return result.toPromise();
    }
	

}



import { ObservableWalletApi } from './ObservableAPI';


import { WalletApiRequestFactory, WalletApiResponseProcessor} from "../apis/WalletApi";
export class PromiseWalletApi {
    private api: ObservableWalletApi

    public constructor(
        configuration: Configuration,
        requestFactory?: WalletApiRequestFactory,
        responseProcessor?: WalletApiResponseProcessor
    ) {
        this.api = new ObservableWalletApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Creates new accounts, insert next deterministic keys in wallet up to count
     * @param accountsCreateRequest 
     */
    public accountsCreate(accountsCreateRequest?: AccountsCreateRequest, options?: Configuration): Promise<AccountsCreateResponse> {
    	const result = this.api.accountsCreate(accountsCreateRequest, options);
        return result.toPromise();
    }
	
    /**
     * Receive pending block for account in wallet
     * @param receiveRequest 
     */
    public receive(receiveRequest?: ReceiveRequest, options?: Configuration): Promise<ReceiveResponse> {
    	const result = this.api.receive(receiveRequest, options);
        return result.toPromise();
    }
	
    /**
     * Creates a new random wallet id
     * @param walletCreateRequest 
     */
    public walletCreate(walletCreateRequest?: WalletCreateRequest, options?: Configuration): Promise<WalletCreateResponse> {
    	const result = this.api.walletCreate(walletCreateRequest, options);
        return result.toPromise();
    }
	

}



