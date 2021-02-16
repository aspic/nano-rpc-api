import { ResponseContext, RequestContext, HttpFile } from '../http/http';
import * as models from '../models/all';
import { Configuration} from '../configuration'
import { Observable, of, from } from '../rxjsStub';
import {mergeMap, map} from  '../rxjsStub';

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

import { DebugApiRequestFactory, DebugApiResponseProcessor} from "../apis/DebugApi";
export class ObservableDebugApi {
    private requestFactory: DebugApiRequestFactory;
    private responseProcessor: DebugApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: DebugApiRequestFactory,
        responseProcessor?: DebugApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new DebugApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new DebugApiResponseProcessor();
    }

    /**
     * _version 19.0+_  Returns the hash of the block which is having the confirmation height set for, error otherwise. When a block is being confirmed, it must confirm all blocks in the chain below and iteratively follow all receive blocks. This can take a long time, so it can be useful to find which block was the original being confirmed. 
     * @param confirmationHeightCurrentlyProcessingRequest 
     */
    public confirmationHeightCurrentlyProcessing(confirmationHeightCurrentlyProcessingRequest?: ConfirmationHeightCurrentlyProcessingRequest, options?: Configuration): Observable<ConfirmationHeightCurrentlyProcessingResponse> {
    	const requestContextPromise = this.requestFactory.confirmationHeightCurrentlyProcessing(confirmationHeightCurrentlyProcessingRequest, options);

		// build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise);
    	for (let middleware of this.configuration.middleware) {
    		middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
    	}

    	return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
	    	pipe(mergeMap((response: ResponseContext) => {
	    		let middlewarePostObservable = of(response);
	    		for (let middleware of this.configuration.middleware) {
	    			middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
	    		}
	    		return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.confirmationHeightCurrentlyProcessing(rsp)));
	    	}));
    }
	

}




import { NodeRPCsApiRequestFactory, NodeRPCsApiResponseProcessor} from "../apis/NodeRPCsApi";
export class ObservableNodeRPCsApi {
    private requestFactory: NodeRPCsApiRequestFactory;
    private responseProcessor: NodeRPCsApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: NodeRPCsApiRequestFactory,
        responseProcessor?: NodeRPCsApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new NodeRPCsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new NodeRPCsApiResponseProcessor();
    }

    /**
     * Returns how many RAW is owned and how many have not yet been received by **account** > This call may return results that include unconfirmed blocks, so it should not be used in any processes or integrations requiring only details from blocks confirmed by the network. 
     * @param accountBalanceRequest 
     */
    public accountBalance(accountBalanceRequest?: AccountBalanceRequest, options?: Configuration): Observable<AccountBalanceResponse> {
    	const requestContextPromise = this.requestFactory.accountBalance(accountBalanceRequest, options);

		// build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise);
    	for (let middleware of this.configuration.middleware) {
    		middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
    	}

    	return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
	    	pipe(mergeMap((response: ResponseContext) => {
	    		let middlewarePostObservable = of(response);
	    		for (let middleware of this.configuration.middleware) {
	    			middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
	    		}
	    		return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.accountBalance(rsp)));
	    	}));
    }
	
    /**
     * Get number of blocks for a specific account
     * @param accountBlockCountRequest 
     */
    public accountBlockCount(accountBlockCountRequest?: AccountBlockCountRequest, options?: Configuration): Observable<AccountBlockCountResponse> {
    	const requestContextPromise = this.requestFactory.accountBlockCount(accountBlockCountRequest, options);

		// build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise);
    	for (let middleware of this.configuration.middleware) {
    		middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
    	}

    	return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
	    	pipe(mergeMap((response: ResponseContext) => {
	    		let middlewarePostObservable = of(response);
	    		for (let middleware of this.configuration.middleware) {
	    			middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
	    		}
	    		return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.accountBlockCount(rsp)));
	    	}));
    }
	
    /**
     * Get account for the public key
     * @param accountGetRequest 
     */
    public accountGet(accountGetRequest?: AccountGetRequest, options?: Configuration): Observable<AccountGetResponse> {
    	const requestContextPromise = this.requestFactory.accountGet(accountGetRequest, options);

		// build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise);
    	for (let middleware of this.configuration.middleware) {
    		middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
    	}

    	return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
	    	pipe(mergeMap((response: ResponseContext) => {
	    		let middlewarePostObservable = of(response);
	    		for (let middleware of this.configuration.middleware) {
	    			middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
	    		}
	    		return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.accountGet(rsp)));
	    	}));
    }
	
    /**
     * Gets the account history. Reports send/receive information for an account. 
     * @param accountHistoryRequest 
     */
    public accountHistory(accountHistoryRequest?: AccountHistoryRequest, options?: Configuration): Observable<AccountHistoryResponse> {
    	const requestContextPromise = this.requestFactory.accountHistory(accountHistoryRequest, options);

		// build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise);
    	for (let middleware of this.configuration.middleware) {
    		middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
    	}

    	return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
	    	pipe(mergeMap((response: ResponseContext) => {
	    		let middlewarePostObservable = of(response);
	    		for (let middleware of this.configuration.middleware) {
	    			middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
	    		}
	    		return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.accountHistory(rsp)));
	    	}));
    }
	
    /**
     * Returns frontier, open block, change representative block, balance, last modified timestamp from local database & block count for **account**. Only works for accounts that have an entry on the ledger, will return _Account not found_ otherwise. 
     * @param accountInfoRequest 
     */
    public accountInfo(accountInfoRequest?: AccountInfoRequest, options?: Configuration): Observable<AccountInfoResponse> {
    	const requestContextPromise = this.requestFactory.accountInfo(accountInfoRequest, options);

		// build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise);
    	for (let middleware of this.configuration.middleware) {
    		middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
    	}

    	return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
	    	pipe(mergeMap((response: ResponseContext) => {
	    		let middlewarePostObservable = of(response);
	    		for (let middleware of this.configuration.middleware) {
	    			middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
	    		}
	    		return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.accountInfo(rsp)));
	    	}));
    }
	
    /**
     * Get the public key for **account** 
     * @param accountKeyRequest 
     */
    public accountKey(accountKeyRequest?: AccountKeyRequest, options?: Configuration): Observable<AccountKeyResponse> {
    	const requestContextPromise = this.requestFactory.accountKey(accountKeyRequest, options);

		// build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise);
    	for (let middleware of this.configuration.middleware) {
    		middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
    	}

    	return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
	    	pipe(mergeMap((response: ResponseContext) => {
	    		let middlewarePostObservable = of(response);
	    		for (let middleware of this.configuration.middleware) {
	    			middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
	    		}
	    		return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.accountKey(rsp)));
	    	}));
    }
	
    /**
     * Returns the representative for **account** 
     * @param accountRepresentativeRequest 
     */
    public accountRepresentative(accountRepresentativeRequest?: AccountRepresentativeRequest, options?: Configuration): Observable<AccountRepresentativeResponse> {
    	const requestContextPromise = this.requestFactory.accountRepresentative(accountRepresentativeRequest, options);

		// build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise);
    	for (let middleware of this.configuration.middleware) {
    		middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
    	}

    	return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
	    	pipe(mergeMap((response: ResponseContext) => {
	    		let middlewarePostObservable = of(response);
	    		for (let middleware of this.configuration.middleware) {
	    			middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
	    		}
	    		return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.accountRepresentative(rsp)));
	    	}));
    }
	
    /**
     * Returns the voting weight for **account** 
     * @param accountWeightRequest 
     */
    public accountWeight(accountWeightRequest?: AccountWeightRequest, options?: Configuration): Observable<AccountWeightResponse> {
    	const requestContextPromise = this.requestFactory.accountWeight(accountWeightRequest, options);

		// build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise);
    	for (let middleware of this.configuration.middleware) {
    		middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
    	}

    	return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
	    	pipe(mergeMap((response: ResponseContext) => {
	    		let middlewarePostObservable = of(response);
	    		for (let middleware of this.configuration.middleware) {
	    			middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
	    		}
	    		return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.accountWeight(rsp)));
	    	}));
    }
	
    /**
     * Returns how many RAW is owned and how many have not yet been received by **accounts list**  This call may return results that include unconfirmed blocks, so it should not be used in any processes or integrations requiring only details from blocks confirmed by the network. 
     * @param accountsBalancesRequest 
     */
    public accountsBalances(accountsBalancesRequest?: AccountsBalancesRequest, options?: Configuration): Observable<AccountsBalancesResponse> {
    	const requestContextPromise = this.requestFactory.accountsBalances(accountsBalancesRequest, options);

		// build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise);
    	for (let middleware of this.configuration.middleware) {
    		middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
    	}

    	return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
	    	pipe(mergeMap((response: ResponseContext) => {
	    		let middlewarePostObservable = of(response);
	    		for (let middleware of this.configuration.middleware) {
	    			middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
	    		}
	    		return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.accountsBalances(rsp)));
	    	}));
    }
	
    /**
     * Returns a list of pairs of account and block hash representing the head block for **accounts list**  This call may return results that include unconfirmed blocks, so it should not be used in any processes or integrations requiring only details from blocks confirmed by the network. 
     * @param accountsFrontiersRequest 
     */
    public accountsFrontiers(accountsFrontiersRequest?: AccountsFrontiersRequest, options?: Configuration): Observable<AccountsFrontiersResponse> {
    	const requestContextPromise = this.requestFactory.accountsFrontiers(accountsFrontiersRequest, options);

		// build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise);
    	for (let middleware of this.configuration.middleware) {
    		middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
    	}

    	return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
	    	pipe(mergeMap((response: ResponseContext) => {
	    		let middlewarePostObservable = of(response);
	    		for (let middleware of this.configuration.middleware) {
	    			middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
	    		}
	    		return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.accountsFrontiers(rsp)));
	    	}));
    }
	
    /**
     * Returns a list of block hashes which have not yet been received by these accounts
     * @param accountsPendingRequest 
     */
    public accountsPending(accountsPendingRequest?: AccountsPendingRequest, options?: Configuration): Observable<AccountsPendingResponse> {
    	const requestContextPromise = this.requestFactory.accountsPending(accountsPendingRequest, options);

		// build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise);
    	for (let middleware of this.configuration.middleware) {
    		middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
    	}

    	return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
	    	pipe(mergeMap((response: ResponseContext) => {
	    		let middlewarePostObservable = of(response);
	    		for (let middleware of this.configuration.middleware) {
	    			middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
	    		}
	    		return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.accountsPending(rsp)));
	    	}));
    }
	
    /**
     * Returns the difficulty values (16 hexadecimal digits string, 64 bit) for the minimum required on the network (network_minimum) as well as the current active difficulty seen on the network (network_current, 5 minute trended average of adjusted difficulty seen on confirmed transactions) which can be used to perform rework for better prioritization of transaction processing. A multiplier of the network_current from the base difficulty of network_minimum is also provided for comparison. 
     * @param activeDifficultyRequest 
     */
    public activeDifficulty(activeDifficultyRequest?: ActiveDifficultyRequest, options?: Configuration): Observable<ActiveDifficultyResponse> {
    	const requestContextPromise = this.requestFactory.activeDifficulty(activeDifficultyRequest, options);

		// build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise);
    	for (let middleware of this.configuration.middleware) {
    		middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
    	}

    	return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
	    	pipe(mergeMap((response: ResponseContext) => {
	    		let middlewarePostObservable = of(response);
	    		for (let middleware of this.configuration.middleware) {
	    			middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
	    		}
	    		return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.activeDifficulty(rsp)));
	    	}));
    }
	
    /**
     * Returns how many raw are in the public supply 
     * @param availableSupplyRequest 
     */
    public availableSupply(availableSupplyRequest?: AvailableSupplyRequest, options?: Configuration): Observable<AvailableSupplyResponse> {
    	const requestContextPromise = this.requestFactory.availableSupply(availableSupplyRequest, options);

		// build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise);
    	for (let middleware of this.configuration.middleware) {
    		middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
    	}

    	return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
	    	pipe(mergeMap((response: ResponseContext) => {
	    		let middlewarePostObservable = of(response);
	    		for (let middleware of this.configuration.middleware) {
	    			middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
	    		}
	    		return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.availableSupply(rsp)));
	    	}));
    }
	
    /**
     * Returns the account containing block 
     * @param blockAccountRequest 
     */
    public blockAccount(blockAccountRequest?: BlockAccountRequest, options?: Configuration): Observable<BlockAccountResponse> {
    	const requestContextPromise = this.requestFactory.blockAccount(blockAccountRequest, options);

		// build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise);
    	for (let middleware of this.configuration.middleware) {
    		middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
    	}

    	return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
	    	pipe(mergeMap((response: ResponseContext) => {
	    		let middlewarePostObservable = of(response);
	    		for (let middleware of this.configuration.middleware) {
	    			middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
	    		}
	    		return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.blockAccount(rsp)));
	    	}));
    }
	
    /**
     * Request confirmation for **block** from known online representative nodes. Check results with confirmation history. 
     * @param blockConfirmRequest 
     */
    public blockConfirm(blockConfirmRequest?: BlockConfirmRequest, options?: Configuration): Observable<BlockConfirmResponse> {
    	const requestContextPromise = this.requestFactory.blockConfirm(blockConfirmRequest, options);

		// build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise);
    	for (let middleware of this.configuration.middleware) {
    		middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
    	}

    	return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
	    	pipe(mergeMap((response: ResponseContext) => {
	    		let middlewarePostObservable = of(response);
	    		for (let middleware of this.configuration.middleware) {
	    			middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
	    		}
	    		return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.blockConfirm(rsp)));
	    	}));
    }
	
    /**
     * Reports the number of blocks in the ledger and unchecked synchronizing blocks. 
     * @param blockCountRequest 
     */
    public blockCount(blockCountRequest?: BlockCountRequest, options?: Configuration): Observable<BlockCountResponse> {
    	const requestContextPromise = this.requestFactory.blockCount(blockCountRequest, options);

		// build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise);
    	for (let middleware of this.configuration.middleware) {
    		middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
    	}

    	return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
	    	pipe(mergeMap((response: ResponseContext) => {
	    		let middlewarePostObservable = of(response);
	    		for (let middleware of this.configuration.middleware) {
	    			middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
	    		}
	    		return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.blockCount(rsp)));
	    	}));
    }
	
    /**
     * Reports the number of blocks in the ledger by type (send, receive, open, change, state with version) 
     * @param blockCountTypeRequest 
     */
    public blockCountType(blockCountTypeRequest?: BlockCountTypeRequest, options?: Configuration): Observable<BlockCountTypeResponse> {
    	const requestContextPromise = this.requestFactory.blockCountType(blockCountTypeRequest, options);

		// build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise);
    	for (let middleware of this.configuration.middleware) {
    		middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
    	}

    	return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
	    	pipe(mergeMap((response: ResponseContext) => {
	    		let middlewarePostObservable = of(response);
	    		for (let middleware of this.configuration.middleware) {
	    			middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
	    		}
	    		return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.blockCountType(rsp)));
	    	}));
    }
	
    /**
     * Creates a json representations of new block based on input data & signed with **private key** or **account** in **wallet**. Use for offline signing. 
     * @param blockCreateRequest 
     */
    public blockCreate(blockCreateRequest?: BlockCreateRequest, options?: Configuration): Observable<BlockCreateResponse> {
    	const requestContextPromise = this.requestFactory.blockCreate(blockCreateRequest, options);

		// build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise);
    	for (let middleware of this.configuration.middleware) {
    		middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
    	}

    	return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
	    	pipe(mergeMap((response: ResponseContext) => {
	    		let middlewarePostObservable = of(response);
	    		for (let middleware of this.configuration.middleware) {
	    			middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
	    		}
	    		return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.blockCreate(rsp)));
	    	}));
    }
	
    /**
     * Returning block hash for given block content. Using the optional **json_block** is recommended since v19.0. 
     * @param blockHashRequest 
     */
    public blockHash(blockHashRequest?: BlockHashRequest, options?: Configuration): Observable<BlockHashResponse> {
    	const requestContextPromise = this.requestFactory.blockHash(blockHashRequest, options);

		// build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise);
    	for (let middleware of this.configuration.middleware) {
    		middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
    	}

    	return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
	    	pipe(mergeMap((response: ResponseContext) => {
	    		let middlewarePostObservable = of(response);
	    		for (let middleware of this.configuration.middleware) {
	    			middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
	    		}
	    		return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.blockHash(rsp)));
	    	}));
    }
	
    /**
     * Retrieves a json representation of the block in `contents` along with:  * _since version 18.0_: `block_account`, transaction `amount`, block `balance`, block `height` in account chain, block local modification `timestamp` * _since version 19.0_: Whether block was `confirmed`, `subtype` (for state blocks) of `send`, `receive`,  `change` or `epoch`  Using the optional `json_block` is recommended since v19.0. 
     * @param blockInfoRequest 
     */
    public blockInfo(blockInfoRequest?: BlockInfoRequest, options?: Configuration): Observable<BlockInfoResponse> {
    	const requestContextPromise = this.requestFactory.blockInfo(blockInfoRequest, options);

		// build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise);
    	for (let middleware of this.configuration.middleware) {
    		middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
    	}

    	return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
	    	pipe(mergeMap((response: ResponseContext) => {
	    		let middlewarePostObservable = of(response);
	    		for (let middleware of this.configuration.middleware) {
	    			middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
	    		}
	    		return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.blockInfo(rsp)));
	    	}));
    }
	
    /**
     * Retrieves a json representations of **blocks**. 
     * @param blocksRequest 
     */
    public blocks(blocksRequest?: BlocksRequest, options?: Configuration): Observable<BlocksResponse> {
    	const requestContextPromise = this.requestFactory.blocks(blocksRequest, options);

		// build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise);
    	for (let middleware of this.configuration.middleware) {
    		middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
    	}

    	return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
	    	pipe(mergeMap((response: ResponseContext) => {
	    		let middlewarePostObservable = of(response);
	    		for (let middleware of this.configuration.middleware) {
	    			middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
	    		}
	    		return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.blocks(rsp)));
	    	}));
    }
	
    /**
     * Retrieves a json representations of blocks in contents along with:  * _since version 18.0_: `block_account`, transaction `amount`, block `balance`, block `height` in account chain, block local modification  timestamp * _since version 19.0_: Whether block was `confirmed`, `subtype` (for state blocks) of `send`, `receive`, `change` or `epoch` 
     * @param blocksInfoRequest 
     */
    public blocksInfo(blocksInfoRequest?: BlocksInfoRequest, options?: Configuration): Observable<BlocksInfoResponse> {
    	const requestContextPromise = this.requestFactory.blocksInfo(blocksInfoRequest, options);

		// build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise);
    	for (let middleware of this.configuration.middleware) {
    		middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
    	}

    	return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
	    	pipe(mergeMap((response: ResponseContext) => {
	    		let middlewarePostObservable = of(response);
	    		for (let middleware of this.configuration.middleware) {
	    			middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
	    		}
	    		return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.blocksInfo(rsp)));
	    	}));
    }
	
    /**
     * Initialize bootstrap to specific **IP address** and **port**. Not compatible with launch flag [--disable_legacy_bootstrap](https://docs.nano.org/commands/command-line-interface/#-disable_legacy_bootstrap) 
     * @param bootstrapRequest 
     */
    public bootstrap(bootstrapRequest?: BootstrapRequest, options?: Configuration): Observable<BootstrapResponse> {
    	const requestContextPromise = this.requestFactory.bootstrap(bootstrapRequest, options);

		// build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise);
    	for (let middleware of this.configuration.middleware) {
    		middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
    	}

    	return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
	    	pipe(mergeMap((response: ResponseContext) => {
	    		let middlewarePostObservable = of(response);
	    		for (let middleware of this.configuration.middleware) {
	    			middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
	    		}
	    		return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.bootstrap(rsp)));
	    	}));
    }
	
    /**
     * Initialize multi-connection bootstrap to random peers. Not compatible with launch flag [--disable_legacy_bootstrap](https://docs.nano.org/commands/command-line-interface/#-disable_legacy_bootstrap) 
     * @param bootstrapAnyRequest 
     */
    public bootstrapAny(bootstrapAnyRequest?: BootstrapAnyRequest, options?: Configuration): Observable<BootstrapAnyResponse> {
    	const requestContextPromise = this.requestFactory.bootstrapAny(bootstrapAnyRequest, options);

		// build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise);
    	for (let middleware of this.configuration.middleware) {
    		middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
    	}

    	return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
	    	pipe(mergeMap((response: ResponseContext) => {
	    		let middlewarePostObservable = of(response);
	    		for (let middleware of this.configuration.middleware) {
	    			middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
	    		}
	    		return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.bootstrapAny(rsp)));
	    	}));
    }
	
    /**
     * _version 17.0+_  Initialize lazy bootstrap with given block hash. Not compatible with launch flag [--disable_lazy_bootstrap](https://docs.nano.org/commands/command-line-interface/#-disable_lazy_bootstrap) 
     * @param bootstrapLazyRequest 
     */
    public bootstrapLazy(bootstrapLazyRequest?: BootstrapLazyRequest, options?: Configuration): Observable<BootstrapLazyResponse> {
    	const requestContextPromise = this.requestFactory.bootstrapLazy(bootstrapLazyRequest, options);

		// build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise);
    	for (let middleware of this.configuration.middleware) {
    		middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
    	}

    	return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
	    	pipe(mergeMap((response: ResponseContext) => {
	    		let middlewarePostObservable = of(response);
	    		for (let middleware of this.configuration.middleware) {
	    			middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
	    		}
	    		return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.bootstrapLazy(rsp)));
	    	}));
    }
	
    /**
     * Returns a consecutive list of block hashes in the account chain starting at **block** back to **count** (direction from frontier back to open block, from newer blocks to older). Will list all blocks back to the open block of this chain when count is set to \"-1\". The requested block hash is included in the answer. 
     * @param chainRequest 
     */
    public chain(chainRequest?: ChainRequest, options?: Configuration): Observable<ChainResponse> {
    	const requestContextPromise = this.requestFactory.chain(chainRequest, options);

		// build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise);
    	for (let middleware of this.configuration.middleware) {
    		middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
    	}

    	return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
	    	pipe(mergeMap((response: ResponseContext) => {
	    		let middlewarePostObservable = of(response);
	    		for (let middleware of this.configuration.middleware) {
	    			middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
	    		}
	    		return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.chain(rsp)));
	    	}));
    }
	
    /**
     * _version 16.0+_  Returns list of active elections roots (excluding stopped & aborted elections). Find info about specific root with confirmation_info  The roots provided are two parts and differ between the first account block and subsequent blocks:  * First account block (open): 0000000000000000000000000000000000000000000000000000000000000000 + account public key * Other blocks: previous hash + previous hash 
     * @param confirmationActiveRequest 
     */
    public confirmationActive(confirmationActiveRequest?: ConfirmationActiveRequest, options?: Configuration): Observable<ConfirmationActiveResponse> {
    	const requestContextPromise = this.requestFactory.confirmationActive(confirmationActiveRequest, options);

		// build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise);
    	for (let middleware of this.configuration.middleware) {
    		middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
    	}

    	return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
	    	pipe(mergeMap((response: ResponseContext) => {
	    		let middlewarePostObservable = of(response);
	    		for (let middleware of this.configuration.middleware) {
	    			middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
	    		}
	    		return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.confirmationActive(rsp)));
	    	}));
    }
	
    /**
     * _version 12.0+_ _duration, time, confirmation_stats: version 17.0+_  Returns hash, tally weight, election duration (in milliseconds), election confirmation timestamp for recent elections winners. Also returns stats: count of elections in history (limited to 2048) & average duration time  With version 19.0+ `confirmation_history_size` can be managed in [config.json](https://docs.nano.org/running-a-node/configuration/#example-file) to adjust the number of elections to be kept in history and returned by this call. Due to timings inside the node, the default 2048 limit will return all confirmations up to traffic levels of  approximately 56 confirmations/sec. To properly track levels above this, increase this value or use the confirmation subscription through the [websocket](https://docs.nano.org/integration-guides/advanced/#websocket-support) instead. 
     * @param confirmationHistoryRequest 
     */
    public confirmationHistory(confirmationHistoryRequest?: ConfirmationHistoryRequest, options?: Configuration): Observable<ConfirmationHistoryResponse> {
    	const requestContextPromise = this.requestFactory.confirmationHistory(confirmationHistoryRequest, options);

		// build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise);
    	for (let middleware of this.configuration.middleware) {
    		middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
    	}

    	return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
	    	pipe(mergeMap((response: ResponseContext) => {
	    		let middlewarePostObservable = of(response);
	    		for (let middleware of this.configuration.middleware) {
	    			middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
	    		}
	    		return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.confirmationHistory(rsp)));
	    	}));
    }
	
    /**
     * _version 16.0+_  Returns info about active election by *root*. Including announcements count, last winner (initially local ledger block), total tally of voted representatives, concurrent blocks with tally & block contents for each. Using the optional `json_block` is recommended since v19.0.  The roots provided are two parts and differ between the first account block and subsequent blocks:  * First account block (open): 0000000000000000000000000000000000000000000000000000000000000000 + account public key * Other blocks: previous hash + previous hash 
     * @param confirmationInfoRequest 
     */
    public confirmationInfo(confirmationInfoRequest?: ConfirmationInfoRequest, options?: Configuration): Observable<ConfirmationInfoResponse> {
    	const requestContextPromise = this.requestFactory.confirmationInfo(confirmationInfoRequest, options);

		// build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise);
    	for (let middleware of this.configuration.middleware) {
    		middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
    	}

    	return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
	    	pipe(mergeMap((response: ResponseContext) => {
	    		let middlewarePostObservable = of(response);
	    		for (let middleware of this.configuration.middleware) {
	    			middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
	    		}
	    		return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.confirmationInfo(rsp)));
	    	}));
    }
	
    /**
     * Generates an **adhoc random** keypair 
     * @param keyCreateRequest 
     */
    public keyCreate(keyCreateRequest?: KeyCreateRequest, options?: Configuration): Observable<KeyCreateResponse> {
    	const requestContextPromise = this.requestFactory.keyCreate(keyCreateRequest, options);

		// build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise);
    	for (let middleware of this.configuration.middleware) {
    		middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
    	}

    	return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
	    	pipe(mergeMap((response: ResponseContext) => {
	    		let middlewarePostObservable = of(response);
	    		for (let middleware of this.configuration.middleware) {
	    			middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
	    		}
	    		return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.keyCreate(rsp)));
	    	}));
    }
	
    /**
     * Derive public key and account number from **private key** 
     * @param keyExpandRequest 
     */
    public keyExpand(keyExpandRequest?: KeyExpandRequest, options?: Configuration): Observable<KeyExpandResponse> {
    	const requestContextPromise = this.requestFactory.keyExpand(keyExpandRequest, options);

		// build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise);
    	for (let middleware of this.configuration.middleware) {
    		middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
    	}

    	return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
	    	pipe(mergeMap((response: ResponseContext) => {
	    		let middlewarePostObservable = of(response);
	    		for (let middleware of this.configuration.middleware) {
	    			middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
	    		}
	    		return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.keyExpand(rsp)));
	    	}));
    }
	
    /**
     * Returns a list of block hashes which have not yet been received by this account.  **Optional `include_only_confirmed` recommended**:  By default this will return blocks not in active elections but unconfirmed (e.g., block was received but node was restarted, election was dropped, new ledger with reset confirmation height).  **To avoid potential issues related to these situations setting the include_only_confirmed = true is recommended for most use cases.** 
     * @param pendingRequest 
     */
    public pending(pendingRequest?: PendingRequest, options?: Configuration): Observable<PendingResponse> {
    	const requestContextPromise = this.requestFactory.pending(pendingRequest, options);

		// build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise);
    	for (let middleware of this.configuration.middleware) {
    		middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
    	}

    	return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
	    	pipe(mergeMap((response: ResponseContext) => {
	    		let middlewarePostObservable = of(response);
	    		for (let middleware of this.configuration.middleware) {
	    			middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
	    		}
	    		return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.pending(rsp)));
	    	}));
    }
	
    /**
     * Publish block to the network
     * @param processRequest 
     */
    public process(processRequest?: ProcessRequest, options?: Configuration): Observable<ProcessResponse> {
    	const requestContextPromise = this.requestFactory.process(processRequest, options);

		// build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise);
    	for (let middleware of this.configuration.middleware) {
    		middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
    	}

    	return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
	    	pipe(mergeMap((response: ResponseContext) => {
	    		let middlewarePostObservable = of(response);
	    		for (let middleware of this.configuration.middleware) {
	    			middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
	    		}
	    		return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.process(rsp)));
	    	}));
    }
	
    /**
     * Generates work for block. hash is the frontier of the account or in the case of an open block, the public key representation of the account which can be found with account_key 
     * @param workGenerateRequest 
     */
    public workGenerate(workGenerateRequest?: WorkGenerateRequest, options?: Configuration): Observable<WorkGenerateResponse> {
    	const requestContextPromise = this.requestFactory.workGenerate(workGenerateRequest, options);

		// build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise);
    	for (let middleware of this.configuration.middleware) {
    		middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
    	}

    	return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
	    	pipe(mergeMap((response: ResponseContext) => {
	    		let middlewarePostObservable = of(response);
	    		for (let middleware of this.configuration.middleware) {
	    			middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
	    		}
	    		return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.workGenerate(rsp)));
	    	}));
    }
	

}




import { WalletApiRequestFactory, WalletApiResponseProcessor} from "../apis/WalletApi";
export class ObservableWalletApi {
    private requestFactory: WalletApiRequestFactory;
    private responseProcessor: WalletApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: WalletApiRequestFactory,
        responseProcessor?: WalletApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new WalletApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new WalletApiResponseProcessor();
    }

    /**
     * Creates new accounts, insert next deterministic keys in wallet up to count
     * @param accountsCreateRequest 
     */
    public accountsCreate(accountsCreateRequest?: AccountsCreateRequest, options?: Configuration): Observable<AccountsCreateResponse> {
    	const requestContextPromise = this.requestFactory.accountsCreate(accountsCreateRequest, options);

		// build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise);
    	for (let middleware of this.configuration.middleware) {
    		middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
    	}

    	return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
	    	pipe(mergeMap((response: ResponseContext) => {
	    		let middlewarePostObservable = of(response);
	    		for (let middleware of this.configuration.middleware) {
	    			middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
	    		}
	    		return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.accountsCreate(rsp)));
	    	}));
    }
	
    /**
     * Receive pending block for account in wallet
     * @param receiveRequest 
     */
    public receive(receiveRequest?: ReceiveRequest, options?: Configuration): Observable<ReceiveResponse> {
    	const requestContextPromise = this.requestFactory.receive(receiveRequest, options);

		// build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise);
    	for (let middleware of this.configuration.middleware) {
    		middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
    	}

    	return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
	    	pipe(mergeMap((response: ResponseContext) => {
	    		let middlewarePostObservable = of(response);
	    		for (let middleware of this.configuration.middleware) {
	    			middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
	    		}
	    		return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.receive(rsp)));
	    	}));
    }
	
    /**
     * Creates a new random wallet id
     * @param walletCreateRequest 
     */
    public walletCreate(walletCreateRequest?: WalletCreateRequest, options?: Configuration): Observable<WalletCreateResponse> {
    	const requestContextPromise = this.requestFactory.walletCreate(walletCreateRequest, options);

		// build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise);
    	for (let middleware of this.configuration.middleware) {
    		middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
    	}

    	return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
	    	pipe(mergeMap((response: ResponseContext) => {
	    		let middlewarePostObservable = of(response);
	    		for (let middleware of this.configuration.middleware) {
	    			middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
	    		}
	    		return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.walletCreate(rsp)));
	    	}));
    }
	

}



