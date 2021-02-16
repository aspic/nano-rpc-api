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

import { ObservableDebugApi } from "./ObservableAPI";
import { DebugApiRequestFactory, DebugApiResponseProcessor} from "../apis/DebugApi";

export interface DebugApiConfirmationHeightCurrentlyProcessingRequest {
    /**
     * 
     * @type ConfirmationHeightCurrentlyProcessingRequest
     * @memberof DebugApiconfirmationHeightCurrentlyProcessing
     */
    confirmationHeightCurrentlyProcessingRequest?: ConfirmationHeightCurrentlyProcessingRequest
}


export class ObjectDebugApi {
    private api: ObservableDebugApi

    public constructor(configuration: Configuration, requestFactory?: DebugApiRequestFactory, responseProcessor?: DebugApiResponseProcessor) {
        this.api = new ObservableDebugApi(configuration, requestFactory, responseProcessor);
	}

    /**
     * _version 19.0+_  Returns the hash of the block which is having the confirmation height set for, error otherwise. When a block is being confirmed, it must confirm all blocks in the chain below and iteratively follow all receive blocks. This can take a long time, so it can be useful to find which block was the original being confirmed. 
     * @param param the request object
     */
    public confirmationHeightCurrentlyProcessing(param: DebugApiConfirmationHeightCurrentlyProcessingRequest, options?: Configuration): Promise<ConfirmationHeightCurrentlyProcessingResponse> {
        return this.api.confirmationHeightCurrentlyProcessing(param.confirmationHeightCurrentlyProcessingRequest,  options).toPromise();
    }
	

}




import { ObservableNodeRPCsApi } from "./ObservableAPI";
import { NodeRPCsApiRequestFactory, NodeRPCsApiResponseProcessor} from "../apis/NodeRPCsApi";

export interface NodeRPCsApiAccountBalanceRequest {
    /**
     * 
     * @type AccountBalanceRequest
     * @memberof NodeRPCsApiaccountBalance
     */
    accountBalanceRequest?: AccountBalanceRequest
}

export interface NodeRPCsApiAccountBlockCountRequest {
    /**
     * 
     * @type AccountBlockCountRequest
     * @memberof NodeRPCsApiaccountBlockCount
     */
    accountBlockCountRequest?: AccountBlockCountRequest
}

export interface NodeRPCsApiAccountGetRequest {
    /**
     * 
     * @type AccountGetRequest
     * @memberof NodeRPCsApiaccountGet
     */
    accountGetRequest?: AccountGetRequest
}

export interface NodeRPCsApiAccountHistoryRequest {
    /**
     * 
     * @type AccountHistoryRequest
     * @memberof NodeRPCsApiaccountHistory
     */
    accountHistoryRequest?: AccountHistoryRequest
}

export interface NodeRPCsApiAccountInfoRequest {
    /**
     * 
     * @type AccountInfoRequest
     * @memberof NodeRPCsApiaccountInfo
     */
    accountInfoRequest?: AccountInfoRequest
}

export interface NodeRPCsApiAccountKeyRequest {
    /**
     * 
     * @type AccountKeyRequest
     * @memberof NodeRPCsApiaccountKey
     */
    accountKeyRequest?: AccountKeyRequest
}

export interface NodeRPCsApiAccountRepresentativeRequest {
    /**
     * 
     * @type AccountRepresentativeRequest
     * @memberof NodeRPCsApiaccountRepresentative
     */
    accountRepresentativeRequest?: AccountRepresentativeRequest
}

export interface NodeRPCsApiAccountWeightRequest {
    /**
     * 
     * @type AccountWeightRequest
     * @memberof NodeRPCsApiaccountWeight
     */
    accountWeightRequest?: AccountWeightRequest
}

export interface NodeRPCsApiAccountsBalancesRequest {
    /**
     * 
     * @type AccountsBalancesRequest
     * @memberof NodeRPCsApiaccountsBalances
     */
    accountsBalancesRequest?: AccountsBalancesRequest
}

export interface NodeRPCsApiAccountsFrontiersRequest {
    /**
     * 
     * @type AccountsFrontiersRequest
     * @memberof NodeRPCsApiaccountsFrontiers
     */
    accountsFrontiersRequest?: AccountsFrontiersRequest
}

export interface NodeRPCsApiAccountsPendingRequest {
    /**
     * 
     * @type AccountsPendingRequest
     * @memberof NodeRPCsApiaccountsPending
     */
    accountsPendingRequest?: AccountsPendingRequest
}

export interface NodeRPCsApiActiveDifficultyRequest {
    /**
     * 
     * @type ActiveDifficultyRequest
     * @memberof NodeRPCsApiactiveDifficulty
     */
    activeDifficultyRequest?: ActiveDifficultyRequest
}

export interface NodeRPCsApiAvailableSupplyRequest {
    /**
     * 
     * @type AvailableSupplyRequest
     * @memberof NodeRPCsApiavailableSupply
     */
    availableSupplyRequest?: AvailableSupplyRequest
}

export interface NodeRPCsApiBlockAccountRequest {
    /**
     * 
     * @type BlockAccountRequest
     * @memberof NodeRPCsApiblockAccount
     */
    blockAccountRequest?: BlockAccountRequest
}

export interface NodeRPCsApiBlockConfirmRequest {
    /**
     * 
     * @type BlockConfirmRequest
     * @memberof NodeRPCsApiblockConfirm
     */
    blockConfirmRequest?: BlockConfirmRequest
}

export interface NodeRPCsApiBlockCountRequest {
    /**
     * 
     * @type BlockCountRequest
     * @memberof NodeRPCsApiblockCount
     */
    blockCountRequest?: BlockCountRequest
}

export interface NodeRPCsApiBlockCountTypeRequest {
    /**
     * 
     * @type BlockCountTypeRequest
     * @memberof NodeRPCsApiblockCountType
     */
    blockCountTypeRequest?: BlockCountTypeRequest
}

export interface NodeRPCsApiBlockCreateRequest {
    /**
     * 
     * @type BlockCreateRequest
     * @memberof NodeRPCsApiblockCreate
     */
    blockCreateRequest?: BlockCreateRequest
}

export interface NodeRPCsApiBlockHashRequest {
    /**
     * 
     * @type BlockHashRequest
     * @memberof NodeRPCsApiblockHash
     */
    blockHashRequest?: BlockHashRequest
}

export interface NodeRPCsApiBlockInfoRequest {
    /**
     * 
     * @type BlockInfoRequest
     * @memberof NodeRPCsApiblockInfo
     */
    blockInfoRequest?: BlockInfoRequest
}

export interface NodeRPCsApiBlocksRequest {
    /**
     * 
     * @type BlocksRequest
     * @memberof NodeRPCsApiblocks
     */
    blocksRequest?: BlocksRequest
}

export interface NodeRPCsApiBlocksInfoRequest {
    /**
     * 
     * @type BlocksInfoRequest
     * @memberof NodeRPCsApiblocksInfo
     */
    blocksInfoRequest?: BlocksInfoRequest
}

export interface NodeRPCsApiBootstrapRequest {
    /**
     * 
     * @type BootstrapRequest
     * @memberof NodeRPCsApibootstrap
     */
    bootstrapRequest?: BootstrapRequest
}

export interface NodeRPCsApiBootstrapAnyRequest {
    /**
     * 
     * @type BootstrapAnyRequest
     * @memberof NodeRPCsApibootstrapAny
     */
    bootstrapAnyRequest?: BootstrapAnyRequest
}

export interface NodeRPCsApiBootstrapLazyRequest {
    /**
     * 
     * @type BootstrapLazyRequest
     * @memberof NodeRPCsApibootstrapLazy
     */
    bootstrapLazyRequest?: BootstrapLazyRequest
}

export interface NodeRPCsApiChainRequest {
    /**
     * 
     * @type ChainRequest
     * @memberof NodeRPCsApichain
     */
    chainRequest?: ChainRequest
}

export interface NodeRPCsApiConfirmationActiveRequest {
    /**
     * 
     * @type ConfirmationActiveRequest
     * @memberof NodeRPCsApiconfirmationActive
     */
    confirmationActiveRequest?: ConfirmationActiveRequest
}

export interface NodeRPCsApiConfirmationHistoryRequest {
    /**
     * 
     * @type ConfirmationHistoryRequest
     * @memberof NodeRPCsApiconfirmationHistory
     */
    confirmationHistoryRequest?: ConfirmationHistoryRequest
}

export interface NodeRPCsApiConfirmationInfoRequest {
    /**
     * 
     * @type ConfirmationInfoRequest
     * @memberof NodeRPCsApiconfirmationInfo
     */
    confirmationInfoRequest?: ConfirmationInfoRequest
}

export interface NodeRPCsApiKeyCreateRequest {
    /**
     * 
     * @type KeyCreateRequest
     * @memberof NodeRPCsApikeyCreate
     */
    keyCreateRequest?: KeyCreateRequest
}

export interface NodeRPCsApiKeyExpandRequest {
    /**
     * 
     * @type KeyExpandRequest
     * @memberof NodeRPCsApikeyExpand
     */
    keyExpandRequest?: KeyExpandRequest
}

export interface NodeRPCsApiPendingRequest {
    /**
     * 
     * @type PendingRequest
     * @memberof NodeRPCsApipending
     */
    pendingRequest?: PendingRequest
}

export interface NodeRPCsApiProcessRequest {
    /**
     * 
     * @type ProcessRequest
     * @memberof NodeRPCsApiprocess
     */
    processRequest?: ProcessRequest
}

export interface NodeRPCsApiWorkGenerateRequest {
    /**
     * 
     * @type WorkGenerateRequest
     * @memberof NodeRPCsApiworkGenerate
     */
    workGenerateRequest?: WorkGenerateRequest
}


export class ObjectNodeRPCsApi {
    private api: ObservableNodeRPCsApi

    public constructor(configuration: Configuration, requestFactory?: NodeRPCsApiRequestFactory, responseProcessor?: NodeRPCsApiResponseProcessor) {
        this.api = new ObservableNodeRPCsApi(configuration, requestFactory, responseProcessor);
	}

    /**
     * Returns how many RAW is owned and how many have not yet been received by **account** > This call may return results that include unconfirmed blocks, so it should not be used in any processes or integrations requiring only details from blocks confirmed by the network. 
     * @param param the request object
     */
    public accountBalance(param: NodeRPCsApiAccountBalanceRequest, options?: Configuration): Promise<AccountBalanceResponse> {
        return this.api.accountBalance(param.accountBalanceRequest,  options).toPromise();
    }
	
    /**
     * Get number of blocks for a specific account
     * @param param the request object
     */
    public accountBlockCount(param: NodeRPCsApiAccountBlockCountRequest, options?: Configuration): Promise<AccountBlockCountResponse> {
        return this.api.accountBlockCount(param.accountBlockCountRequest,  options).toPromise();
    }
	
    /**
     * Get account for the public key
     * @param param the request object
     */
    public accountGet(param: NodeRPCsApiAccountGetRequest, options?: Configuration): Promise<AccountGetResponse> {
        return this.api.accountGet(param.accountGetRequest,  options).toPromise();
    }
	
    /**
     * Gets the account history. Reports send/receive information for an account. 
     * @param param the request object
     */
    public accountHistory(param: NodeRPCsApiAccountHistoryRequest, options?: Configuration): Promise<AccountHistoryResponse> {
        return this.api.accountHistory(param.accountHistoryRequest,  options).toPromise();
    }
	
    /**
     * Returns frontier, open block, change representative block, balance, last modified timestamp from local database & block count for **account**. Only works for accounts that have an entry on the ledger, will return _Account not found_ otherwise. 
     * @param param the request object
     */
    public accountInfo(param: NodeRPCsApiAccountInfoRequest, options?: Configuration): Promise<AccountInfoResponse> {
        return this.api.accountInfo(param.accountInfoRequest,  options).toPromise();
    }
	
    /**
     * Get the public key for **account** 
     * @param param the request object
     */
    public accountKey(param: NodeRPCsApiAccountKeyRequest, options?: Configuration): Promise<AccountKeyResponse> {
        return this.api.accountKey(param.accountKeyRequest,  options).toPromise();
    }
	
    /**
     * Returns the representative for **account** 
     * @param param the request object
     */
    public accountRepresentative(param: NodeRPCsApiAccountRepresentativeRequest, options?: Configuration): Promise<AccountRepresentativeResponse> {
        return this.api.accountRepresentative(param.accountRepresentativeRequest,  options).toPromise();
    }
	
    /**
     * Returns the voting weight for **account** 
     * @param param the request object
     */
    public accountWeight(param: NodeRPCsApiAccountWeightRequest, options?: Configuration): Promise<AccountWeightResponse> {
        return this.api.accountWeight(param.accountWeightRequest,  options).toPromise();
    }
	
    /**
     * Returns how many RAW is owned and how many have not yet been received by **accounts list**  This call may return results that include unconfirmed blocks, so it should not be used in any processes or integrations requiring only details from blocks confirmed by the network. 
     * @param param the request object
     */
    public accountsBalances(param: NodeRPCsApiAccountsBalancesRequest, options?: Configuration): Promise<AccountsBalancesResponse> {
        return this.api.accountsBalances(param.accountsBalancesRequest,  options).toPromise();
    }
	
    /**
     * Returns a list of pairs of account and block hash representing the head block for **accounts list**  This call may return results that include unconfirmed blocks, so it should not be used in any processes or integrations requiring only details from blocks confirmed by the network. 
     * @param param the request object
     */
    public accountsFrontiers(param: NodeRPCsApiAccountsFrontiersRequest, options?: Configuration): Promise<AccountsFrontiersResponse> {
        return this.api.accountsFrontiers(param.accountsFrontiersRequest,  options).toPromise();
    }
	
    /**
     * Returns a list of block hashes which have not yet been received by these accounts
     * @param param the request object
     */
    public accountsPending(param: NodeRPCsApiAccountsPendingRequest, options?: Configuration): Promise<AccountsPendingResponse> {
        return this.api.accountsPending(param.accountsPendingRequest,  options).toPromise();
    }
	
    /**
     * Returns the difficulty values (16 hexadecimal digits string, 64 bit) for the minimum required on the network (network_minimum) as well as the current active difficulty seen on the network (network_current, 5 minute trended average of adjusted difficulty seen on confirmed transactions) which can be used to perform rework for better prioritization of transaction processing. A multiplier of the network_current from the base difficulty of network_minimum is also provided for comparison. 
     * @param param the request object
     */
    public activeDifficulty(param: NodeRPCsApiActiveDifficultyRequest, options?: Configuration): Promise<ActiveDifficultyResponse> {
        return this.api.activeDifficulty(param.activeDifficultyRequest,  options).toPromise();
    }
	
    /**
     * Returns how many raw are in the public supply 
     * @param param the request object
     */
    public availableSupply(param: NodeRPCsApiAvailableSupplyRequest, options?: Configuration): Promise<AvailableSupplyResponse> {
        return this.api.availableSupply(param.availableSupplyRequest,  options).toPromise();
    }
	
    /**
     * Returns the account containing block 
     * @param param the request object
     */
    public blockAccount(param: NodeRPCsApiBlockAccountRequest, options?: Configuration): Promise<BlockAccountResponse> {
        return this.api.blockAccount(param.blockAccountRequest,  options).toPromise();
    }
	
    /**
     * Request confirmation for **block** from known online representative nodes. Check results with confirmation history. 
     * @param param the request object
     */
    public blockConfirm(param: NodeRPCsApiBlockConfirmRequest, options?: Configuration): Promise<BlockConfirmResponse> {
        return this.api.blockConfirm(param.blockConfirmRequest,  options).toPromise();
    }
	
    /**
     * Reports the number of blocks in the ledger and unchecked synchronizing blocks. 
     * @param param the request object
     */
    public blockCount(param: NodeRPCsApiBlockCountRequest, options?: Configuration): Promise<BlockCountResponse> {
        return this.api.blockCount(param.blockCountRequest,  options).toPromise();
    }
	
    /**
     * Reports the number of blocks in the ledger by type (send, receive, open, change, state with version) 
     * @param param the request object
     */
    public blockCountType(param: NodeRPCsApiBlockCountTypeRequest, options?: Configuration): Promise<BlockCountTypeResponse> {
        return this.api.blockCountType(param.blockCountTypeRequest,  options).toPromise();
    }
	
    /**
     * Creates a json representations of new block based on input data & signed with **private key** or **account** in **wallet**. Use for offline signing. 
     * @param param the request object
     */
    public blockCreate(param: NodeRPCsApiBlockCreateRequest, options?: Configuration): Promise<BlockCreateResponse> {
        return this.api.blockCreate(param.blockCreateRequest,  options).toPromise();
    }
	
    /**
     * Returning block hash for given block content. Using the optional **json_block** is recommended since v19.0. 
     * @param param the request object
     */
    public blockHash(param: NodeRPCsApiBlockHashRequest, options?: Configuration): Promise<BlockHashResponse> {
        return this.api.blockHash(param.blockHashRequest,  options).toPromise();
    }
	
    /**
     * Retrieves a json representation of the block in `contents` along with:  * _since version 18.0_: `block_account`, transaction `amount`, block `balance`, block `height` in account chain, block local modification `timestamp` * _since version 19.0_: Whether block was `confirmed`, `subtype` (for state blocks) of `send`, `receive`,  `change` or `epoch`  Using the optional `json_block` is recommended since v19.0. 
     * @param param the request object
     */
    public blockInfo(param: NodeRPCsApiBlockInfoRequest, options?: Configuration): Promise<BlockInfoResponse> {
        return this.api.blockInfo(param.blockInfoRequest,  options).toPromise();
    }
	
    /**
     * Retrieves a json representations of **blocks**. 
     * @param param the request object
     */
    public blocks(param: NodeRPCsApiBlocksRequest, options?: Configuration): Promise<BlocksResponse> {
        return this.api.blocks(param.blocksRequest,  options).toPromise();
    }
	
    /**
     * Retrieves a json representations of blocks in contents along with:  * _since version 18.0_: `block_account`, transaction `amount`, block `balance`, block `height` in account chain, block local modification  timestamp * _since version 19.0_: Whether block was `confirmed`, `subtype` (for state blocks) of `send`, `receive`, `change` or `epoch` 
     * @param param the request object
     */
    public blocksInfo(param: NodeRPCsApiBlocksInfoRequest, options?: Configuration): Promise<BlocksInfoResponse> {
        return this.api.blocksInfo(param.blocksInfoRequest,  options).toPromise();
    }
	
    /**
     * Initialize bootstrap to specific **IP address** and **port**. Not compatible with launch flag [--disable_legacy_bootstrap](https://docs.nano.org/commands/command-line-interface/#-disable_legacy_bootstrap) 
     * @param param the request object
     */
    public bootstrap(param: NodeRPCsApiBootstrapRequest, options?: Configuration): Promise<BootstrapResponse> {
        return this.api.bootstrap(param.bootstrapRequest,  options).toPromise();
    }
	
    /**
     * Initialize multi-connection bootstrap to random peers. Not compatible with launch flag [--disable_legacy_bootstrap](https://docs.nano.org/commands/command-line-interface/#-disable_legacy_bootstrap) 
     * @param param the request object
     */
    public bootstrapAny(param: NodeRPCsApiBootstrapAnyRequest, options?: Configuration): Promise<BootstrapAnyResponse> {
        return this.api.bootstrapAny(param.bootstrapAnyRequest,  options).toPromise();
    }
	
    /**
     * _version 17.0+_  Initialize lazy bootstrap with given block hash. Not compatible with launch flag [--disable_lazy_bootstrap](https://docs.nano.org/commands/command-line-interface/#-disable_lazy_bootstrap) 
     * @param param the request object
     */
    public bootstrapLazy(param: NodeRPCsApiBootstrapLazyRequest, options?: Configuration): Promise<BootstrapLazyResponse> {
        return this.api.bootstrapLazy(param.bootstrapLazyRequest,  options).toPromise();
    }
	
    /**
     * Returns a consecutive list of block hashes in the account chain starting at **block** back to **count** (direction from frontier back to open block, from newer blocks to older). Will list all blocks back to the open block of this chain when count is set to \"-1\". The requested block hash is included in the answer. 
     * @param param the request object
     */
    public chain(param: NodeRPCsApiChainRequest, options?: Configuration): Promise<ChainResponse> {
        return this.api.chain(param.chainRequest,  options).toPromise();
    }
	
    /**
     * _version 16.0+_  Returns list of active elections roots (excluding stopped & aborted elections). Find info about specific root with confirmation_info  The roots provided are two parts and differ between the first account block and subsequent blocks:  * First account block (open): 0000000000000000000000000000000000000000000000000000000000000000 + account public key * Other blocks: previous hash + previous hash 
     * @param param the request object
     */
    public confirmationActive(param: NodeRPCsApiConfirmationActiveRequest, options?: Configuration): Promise<ConfirmationActiveResponse> {
        return this.api.confirmationActive(param.confirmationActiveRequest,  options).toPromise();
    }
	
    /**
     * _version 12.0+_ _duration, time, confirmation_stats: version 17.0+_  Returns hash, tally weight, election duration (in milliseconds), election confirmation timestamp for recent elections winners. Also returns stats: count of elections in history (limited to 2048) & average duration time  With version 19.0+ `confirmation_history_size` can be managed in [config.json](https://docs.nano.org/running-a-node/configuration/#example-file) to adjust the number of elections to be kept in history and returned by this call. Due to timings inside the node, the default 2048 limit will return all confirmations up to traffic levels of  approximately 56 confirmations/sec. To properly track levels above this, increase this value or use the confirmation subscription through the [websocket](https://docs.nano.org/integration-guides/advanced/#websocket-support) instead. 
     * @param param the request object
     */
    public confirmationHistory(param: NodeRPCsApiConfirmationHistoryRequest, options?: Configuration): Promise<ConfirmationHistoryResponse> {
        return this.api.confirmationHistory(param.confirmationHistoryRequest,  options).toPromise();
    }
	
    /**
     * _version 16.0+_  Returns info about active election by *root*. Including announcements count, last winner (initially local ledger block), total tally of voted representatives, concurrent blocks with tally & block contents for each. Using the optional `json_block` is recommended since v19.0.  The roots provided are two parts and differ between the first account block and subsequent blocks:  * First account block (open): 0000000000000000000000000000000000000000000000000000000000000000 + account public key * Other blocks: previous hash + previous hash 
     * @param param the request object
     */
    public confirmationInfo(param: NodeRPCsApiConfirmationInfoRequest, options?: Configuration): Promise<ConfirmationInfoResponse> {
        return this.api.confirmationInfo(param.confirmationInfoRequest,  options).toPromise();
    }
	
    /**
     * Generates an **adhoc random** keypair 
     * @param param the request object
     */
    public keyCreate(param: NodeRPCsApiKeyCreateRequest, options?: Configuration): Promise<KeyCreateResponse> {
        return this.api.keyCreate(param.keyCreateRequest,  options).toPromise();
    }
	
    /**
     * Derive public key and account number from **private key** 
     * @param param the request object
     */
    public keyExpand(param: NodeRPCsApiKeyExpandRequest, options?: Configuration): Promise<KeyExpandResponse> {
        return this.api.keyExpand(param.keyExpandRequest,  options).toPromise();
    }
	
    /**
     * Returns a list of block hashes which have not yet been received by this account.  **Optional `include_only_confirmed` recommended**:  By default this will return blocks not in active elections but unconfirmed (e.g., block was received but node was restarted, election was dropped, new ledger with reset confirmation height).  **To avoid potential issues related to these situations setting the include_only_confirmed = true is recommended for most use cases.** 
     * @param param the request object
     */
    public pending(param: NodeRPCsApiPendingRequest, options?: Configuration): Promise<PendingResponse> {
        return this.api.pending(param.pendingRequest,  options).toPromise();
    }
	
    /**
     * Publish block to the network
     * @param param the request object
     */
    public process(param: NodeRPCsApiProcessRequest, options?: Configuration): Promise<ProcessResponse> {
        return this.api.process(param.processRequest,  options).toPromise();
    }
	
    /**
     * Generates work for block. hash is the frontier of the account or in the case of an open block, the public key representation of the account which can be found with account_key 
     * @param param the request object
     */
    public workGenerate(param: NodeRPCsApiWorkGenerateRequest, options?: Configuration): Promise<WorkGenerateResponse> {
        return this.api.workGenerate(param.workGenerateRequest,  options).toPromise();
    }
	

}




import { ObservableWalletApi } from "./ObservableAPI";
import { WalletApiRequestFactory, WalletApiResponseProcessor} from "../apis/WalletApi";

export interface WalletApiAccountsCreateRequest {
    /**
     * 
     * @type AccountsCreateRequest
     * @memberof WalletApiaccountsCreate
     */
    accountsCreateRequest?: AccountsCreateRequest
}

export interface WalletApiReceiveRequest {
    /**
     * 
     * @type ReceiveRequest
     * @memberof WalletApireceive
     */
    receiveRequest?: ReceiveRequest
}

export interface WalletApiWalletCreateRequest {
    /**
     * 
     * @type WalletCreateRequest
     * @memberof WalletApiwalletCreate
     */
    walletCreateRequest?: WalletCreateRequest
}


export class ObjectWalletApi {
    private api: ObservableWalletApi

    public constructor(configuration: Configuration, requestFactory?: WalletApiRequestFactory, responseProcessor?: WalletApiResponseProcessor) {
        this.api = new ObservableWalletApi(configuration, requestFactory, responseProcessor);
	}

    /**
     * Creates new accounts, insert next deterministic keys in wallet up to count
     * @param param the request object
     */
    public accountsCreate(param: WalletApiAccountsCreateRequest, options?: Configuration): Promise<AccountsCreateResponse> {
        return this.api.accountsCreate(param.accountsCreateRequest,  options).toPromise();
    }
	
    /**
     * Receive pending block for account in wallet
     * @param param the request object
     */
    public receive(param: WalletApiReceiveRequest, options?: Configuration): Promise<ReceiveResponse> {
        return this.api.receive(param.receiveRequest,  options).toPromise();
    }
	
    /**
     * Creates a new random wallet id
     * @param param the request object
     */
    public walletCreate(param: WalletApiWalletCreateRequest, options?: Configuration): Promise<WalletCreateResponse> {
        return this.api.walletCreate(param.walletCreateRequest,  options).toPromise();
    }
	

}



