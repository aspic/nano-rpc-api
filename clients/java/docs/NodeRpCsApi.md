# NodeRpCsApi

All URIs are relative to *http://localhost:7076*

Method | HTTP request | Description
------------- | ------------- | -------------
[**accountBalance**](NodeRpCsApi.md#accountBalance) | **POST** /#account_balance | 
[**accountBlockCount**](NodeRpCsApi.md#accountBlockCount) | **POST** /#account_block_count | 
[**accountGet**](NodeRpCsApi.md#accountGet) | **POST** /#account_get | 
[**accountHistory**](NodeRpCsApi.md#accountHistory) | **POST** /#account_history | 
[**accountInfo**](NodeRpCsApi.md#accountInfo) | **POST** /#account_info | 
[**accountKey**](NodeRpCsApi.md#accountKey) | **POST** /#account_key | 
[**accountRepresentative**](NodeRpCsApi.md#accountRepresentative) | **POST** /#account_representative | 
[**accountWeight**](NodeRpCsApi.md#accountWeight) | **POST** /#account_weight | 
[**accountsBalances**](NodeRpCsApi.md#accountsBalances) | **POST** /#accounts_balances | 
[**accountsFrontiers**](NodeRpCsApi.md#accountsFrontiers) | **POST** /#accounts_frontiers | 
[**accountsPending**](NodeRpCsApi.md#accountsPending) | **POST** /#accounts_pending | 
[**activeDifficulty**](NodeRpCsApi.md#activeDifficulty) | **POST** /#active_difficulty | 
[**availableSupply**](NodeRpCsApi.md#availableSupply) | **POST** /#available_supply | 
[**blockAccount**](NodeRpCsApi.md#blockAccount) | **POST** /#block_account | 
[**blockConfirm**](NodeRpCsApi.md#blockConfirm) | **POST** /#block_confirm | 
[**blockCount**](NodeRpCsApi.md#blockCount) | **POST** /#block_count | 
[**blockCountType**](NodeRpCsApi.md#blockCountType) | **POST** /#block_count_type | 
[**blockCreate**](NodeRpCsApi.md#blockCreate) | **POST** /#block_create | 
[**blockHash**](NodeRpCsApi.md#blockHash) | **POST** /#block_hash | 
[**blockInfo**](NodeRpCsApi.md#blockInfo) | **POST** /#block_info | 
[**blocks**](NodeRpCsApi.md#blocks) | **POST** /#blocks | 
[**blocksInfo**](NodeRpCsApi.md#blocksInfo) | **POST** /#blocks_info | 
[**bootstrap**](NodeRpCsApi.md#bootstrap) | **POST** /#bootstrap | 
[**bootstrapAny**](NodeRpCsApi.md#bootstrapAny) | **POST** /#bootstrap_any | 
[**bootstrapLazy**](NodeRpCsApi.md#bootstrapLazy) | **POST** /#bootstrap_lazy | 
[**chain**](NodeRpCsApi.md#chain) | **POST** /#chain | 
[**confirmationActive**](NodeRpCsApi.md#confirmationActive) | **POST** /#confirmation_active | 
[**confirmationHeightCurrentlyProcessing**](NodeRpCsApi.md#confirmationHeightCurrentlyProcessing) | **POST** /#confirmation_height_currently_processing | 
[**confirmationHistory**](NodeRpCsApi.md#confirmationHistory) | **POST** /#confirmation_history | 
[**confirmationInfo**](NodeRpCsApi.md#confirmationInfo) | **POST** /#confirmation_info | 
[**keyCreate**](NodeRpCsApi.md#keyCreate) | **POST** /#key_create | 
[**keyExpand**](NodeRpCsApi.md#keyExpand) | **POST** /#key_expand | 
[**process**](NodeRpCsApi.md#process) | **POST** /#process | 
[**workGenerate**](NodeRpCsApi.md#workGenerate) | **POST** /#work_generate | 


<a name="accountBalance"></a>
# **accountBalance**
> AccountBalanceResponse accountBalance(accountBalanceRequest)



Returns how many RAW is owned and how many have not yet been received by **account** &gt; This call may return results that include unconfirmed blocks, so it should not be used in any processes or integrations requiring only details from blocks confirmed by the network. 

### Example
```java
// Import classes:
import no.mehl.nano.ApiClient;
import no.mehl.nano.ApiException;
import no.mehl.nano.Configuration;
import no.mehl.nano.models.*;
import org.openapitools.client.api.NodeRpCsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost:7076");

    NodeRpCsApi apiInstance = new NodeRpCsApi(defaultClient);
    AccountBalanceRequest accountBalanceRequest = new AccountBalanceRequest(); // AccountBalanceRequest | 
    try {
      AccountBalanceResponse result = apiInstance.accountBalance(accountBalanceRequest);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling NodeRpCsApi#accountBalance");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accountBalanceRequest** | [**AccountBalanceRequest**](AccountBalanceRequest.md)|  | [optional]

### Return type

[**AccountBalanceResponse**](AccountBalanceResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns balance and pending |  -  |

<a name="accountBlockCount"></a>
# **accountBlockCount**
> AccountBlockCountResponse accountBlockCount(accountBlockCountRequest)



Get number of blocks for a specific account

### Example
```java
// Import classes:
import no.mehl.nano.ApiClient;
import no.mehl.nano.ApiException;
import no.mehl.nano.Configuration;
import no.mehl.nano.models.*;
import org.openapitools.client.api.NodeRpCsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost:7076");

    NodeRpCsApi apiInstance = new NodeRpCsApi(defaultClient);
    AccountBlockCountRequest accountBlockCountRequest = new AccountBlockCountRequest(); // AccountBlockCountRequest | 
    try {
      AccountBlockCountResponse result = apiInstance.accountBlockCount(accountBlockCountRequest);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling NodeRpCsApi#accountBlockCount");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accountBlockCountRequest** | [**AccountBlockCountRequest**](AccountBlockCountRequest.md)|  | [optional]

### Return type

[**AccountBlockCountResponse**](AccountBlockCountResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The number of blocks |  -  |

<a name="accountGet"></a>
# **accountGet**
> AccountGetResponse accountGet(accountGetRequest)



Get account for the public key

### Example
```java
// Import classes:
import no.mehl.nano.ApiClient;
import no.mehl.nano.ApiException;
import no.mehl.nano.Configuration;
import no.mehl.nano.models.*;
import org.openapitools.client.api.NodeRpCsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost:7076");

    NodeRpCsApi apiInstance = new NodeRpCsApi(defaultClient);
    AccountGetRequest accountGetRequest = new AccountGetRequest(); // AccountGetRequest | 
    try {
      AccountGetResponse result = apiInstance.accountGet(accountGetRequest);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling NodeRpCsApi#accountGet");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accountGetRequest** | [**AccountGetRequest**](AccountGetRequest.md)|  | [optional]

### Return type

[**AccountGetResponse**](AccountGetResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | the account for a public key |  -  |

<a name="accountHistory"></a>
# **accountHistory**
> AccountHistoryResponse accountHistory(accountHistoryRequest)



Gets the account history. Reports send/receive information for an account. 

### Example
```java
// Import classes:
import no.mehl.nano.ApiClient;
import no.mehl.nano.ApiException;
import no.mehl.nano.Configuration;
import no.mehl.nano.models.*;
import org.openapitools.client.api.NodeRpCsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost:7076");

    NodeRpCsApi apiInstance = new NodeRpCsApi(defaultClient);
    AccountHistoryRequest accountHistoryRequest = new AccountHistoryRequest(); // AccountHistoryRequest | 
    try {
      AccountHistoryResponse result = apiInstance.accountHistory(accountHistoryRequest);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling NodeRpCsApi#accountHistory");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accountHistoryRequest** | [**AccountHistoryRequest**](AccountHistoryRequest.md)|  | [optional]

### Return type

[**AccountHistoryResponse**](AccountHistoryResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | the account history |  -  |

<a name="accountInfo"></a>
# **accountInfo**
> AccountInfoResponse accountInfo(accountInfoRequest)



Returns frontier, open block, change representative block, balance, last modified timestamp from local database &amp; block count for **account**. Only works for accounts that have an entry on the ledger, will return _Account not found_ otherwise. 

### Example
```java
// Import classes:
import no.mehl.nano.ApiClient;
import no.mehl.nano.ApiException;
import no.mehl.nano.Configuration;
import no.mehl.nano.models.*;
import org.openapitools.client.api.NodeRpCsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost:7076");

    NodeRpCsApi apiInstance = new NodeRpCsApi(defaultClient);
    AccountInfoRequest accountInfoRequest = new AccountInfoRequest(); // AccountInfoRequest | 
    try {
      AccountInfoResponse result = apiInstance.accountInfo(accountInfoRequest);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling NodeRpCsApi#accountInfo");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accountInfoRequest** | [**AccountInfoRequest**](AccountInfoRequest.md)|  | [optional]

### Return type

[**AccountInfoResponse**](AccountInfoResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | the account information |  -  |

<a name="accountKey"></a>
# **accountKey**
> AccountKeyResponse accountKey(accountKeyRequest)



Get the public key for **account** 

### Example
```java
// Import classes:
import no.mehl.nano.ApiClient;
import no.mehl.nano.ApiException;
import no.mehl.nano.Configuration;
import no.mehl.nano.models.*;
import org.openapitools.client.api.NodeRpCsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost:7076");

    NodeRpCsApi apiInstance = new NodeRpCsApi(defaultClient);
    AccountKeyRequest accountKeyRequest = new AccountKeyRequest(); // AccountKeyRequest | 
    try {
      AccountKeyResponse result = apiInstance.accountKey(accountKeyRequest);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling NodeRpCsApi#accountKey");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accountKeyRequest** | [**AccountKeyRequest**](AccountKeyRequest.md)|  | [optional]

### Return type

[**AccountKeyResponse**](AccountKeyResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | the public key |  -  |

<a name="accountRepresentative"></a>
# **accountRepresentative**
> AccountRepresentativeResponse accountRepresentative(accountRepresentativeRequest)



Returns the representative for **account** 

### Example
```java
// Import classes:
import no.mehl.nano.ApiClient;
import no.mehl.nano.ApiException;
import no.mehl.nano.Configuration;
import no.mehl.nano.models.*;
import org.openapitools.client.api.NodeRpCsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost:7076");

    NodeRpCsApi apiInstance = new NodeRpCsApi(defaultClient);
    AccountRepresentativeRequest accountRepresentativeRequest = new AccountRepresentativeRequest(); // AccountRepresentativeRequest | 
    try {
      AccountRepresentativeResponse result = apiInstance.accountRepresentative(accountRepresentativeRequest);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling NodeRpCsApi#accountRepresentative");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accountRepresentativeRequest** | [**AccountRepresentativeRequest**](AccountRepresentativeRequest.md)|  | [optional]

### Return type

[**AccountRepresentativeResponse**](AccountRepresentativeResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | the public key |  -  |

<a name="accountWeight"></a>
# **accountWeight**
> AccountWeightResponse accountWeight(accountWeightRequest)



Returns the voting weight for **account** 

### Example
```java
// Import classes:
import no.mehl.nano.ApiClient;
import no.mehl.nano.ApiException;
import no.mehl.nano.Configuration;
import no.mehl.nano.models.*;
import org.openapitools.client.api.NodeRpCsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost:7076");

    NodeRpCsApi apiInstance = new NodeRpCsApi(defaultClient);
    AccountWeightRequest accountWeightRequest = new AccountWeightRequest(); // AccountWeightRequest | 
    try {
      AccountWeightResponse result = apiInstance.accountWeight(accountWeightRequest);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling NodeRpCsApi#accountWeight");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accountWeightRequest** | [**AccountWeightRequest**](AccountWeightRequest.md)|  | [optional]

### Return type

[**AccountWeightResponse**](AccountWeightResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | voting weight in raw |  -  |

<a name="accountsBalances"></a>
# **accountsBalances**
> AccountsBalancesResponse accountsBalances(accountsBalancesRequest)



Returns how many RAW is owned and how many have not yet been received by **accounts list**  This call may return results that include unconfirmed blocks, so it should not be used in any processes or integrations requiring only details from blocks confirmed by the network. 

### Example
```java
// Import classes:
import no.mehl.nano.ApiClient;
import no.mehl.nano.ApiException;
import no.mehl.nano.Configuration;
import no.mehl.nano.models.*;
import org.openapitools.client.api.NodeRpCsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost:7076");

    NodeRpCsApi apiInstance = new NodeRpCsApi(defaultClient);
    AccountsBalancesRequest accountsBalancesRequest = new AccountsBalancesRequest(); // AccountsBalancesRequest | 
    try {
      AccountsBalancesResponse result = apiInstance.accountsBalances(accountsBalancesRequest);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling NodeRpCsApi#accountsBalances");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accountsBalancesRequest** | [**AccountsBalancesRequest**](AccountsBalancesRequest.md)|  | [optional]

### Return type

[**AccountsBalancesResponse**](AccountsBalancesResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | balance and pending for each account |  -  |

<a name="accountsFrontiers"></a>
# **accountsFrontiers**
> AccountsFrontiersResponse accountsFrontiers(accountsFrontiersRequest)



Returns a list of pairs of account and block hash representing the head block for **accounts list**  This call may return results that include unconfirmed blocks, so it should not be used in any processes or integrations requiring only details from blocks confirmed by the network. 

### Example
```java
// Import classes:
import no.mehl.nano.ApiClient;
import no.mehl.nano.ApiException;
import no.mehl.nano.Configuration;
import no.mehl.nano.models.*;
import org.openapitools.client.api.NodeRpCsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost:7076");

    NodeRpCsApi apiInstance = new NodeRpCsApi(defaultClient);
    AccountsFrontiersRequest accountsFrontiersRequest = new AccountsFrontiersRequest(); // AccountsFrontiersRequest | 
    try {
      AccountsFrontiersResponse result = apiInstance.accountsFrontiers(accountsFrontiersRequest);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling NodeRpCsApi#accountsFrontiers");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accountsFrontiersRequest** | [**AccountsFrontiersRequest**](AccountsFrontiersRequest.md)|  | [optional]

### Return type

[**AccountsFrontiersResponse**](AccountsFrontiersResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The frontiers for each account, keyed on account |  -  |

<a name="accountsPending"></a>
# **accountsPending**
> AccountsPendingResponse accountsPending(accountsPendingRequest)



Returns a list of block hashes which have not yet been received by these accounts

### Example
```java
// Import classes:
import no.mehl.nano.ApiClient;
import no.mehl.nano.ApiException;
import no.mehl.nano.Configuration;
import no.mehl.nano.models.*;
import org.openapitools.client.api.NodeRpCsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost:7076");

    NodeRpCsApi apiInstance = new NodeRpCsApi(defaultClient);
    AccountsPendingRequest accountsPendingRequest = new AccountsPendingRequest(); // AccountsPendingRequest | 
    try {
      AccountsPendingResponse result = apiInstance.accountsPending(accountsPendingRequest);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling NodeRpCsApi#accountsPending");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accountsPendingRequest** | [**AccountsPendingRequest**](AccountsPendingRequest.md)|  | [optional]

### Return type

[**AccountsPendingResponse**](AccountsPendingResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Block hashes which have not yet been received |  -  |

<a name="activeDifficulty"></a>
# **activeDifficulty**
> ActiveDifficultyResponse activeDifficulty(activeDifficultyRequest)



Returns the difficulty values (16 hexadecimal digits string, 64 bit) for the minimum required on the network (network_minimum) as well as the current active difficulty seen on the network (network_current, 5 minute trended average of adjusted difficulty seen on confirmed transactions) which can be used to perform rework for better prioritization of transaction processing. A multiplier of the network_current from the base difficulty of network_minimum is also provided for comparison. 

### Example
```java
// Import classes:
import no.mehl.nano.ApiClient;
import no.mehl.nano.ApiException;
import no.mehl.nano.Configuration;
import no.mehl.nano.models.*;
import org.openapitools.client.api.NodeRpCsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost:7076");

    NodeRpCsApi apiInstance = new NodeRpCsApi(defaultClient);
    ActiveDifficultyRequest activeDifficultyRequest = new ActiveDifficultyRequest(); // ActiveDifficultyRequest | 
    try {
      ActiveDifficultyResponse result = apiInstance.activeDifficulty(activeDifficultyRequest);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling NodeRpCsApi#activeDifficulty");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **activeDifficultyRequest** | [**ActiveDifficultyRequest**](ActiveDifficultyRequest.md)|  | [optional]

### Return type

[**ActiveDifficultyResponse**](ActiveDifficultyResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Block hashes which have not yet been received |  -  |

<a name="availableSupply"></a>
# **availableSupply**
> AvailableSupplyResponse availableSupply(availableSupplyRequest)



Returns how many raw are in the public supply 

### Example
```java
// Import classes:
import no.mehl.nano.ApiClient;
import no.mehl.nano.ApiException;
import no.mehl.nano.Configuration;
import no.mehl.nano.models.*;
import org.openapitools.client.api.NodeRpCsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost:7076");

    NodeRpCsApi apiInstance = new NodeRpCsApi(defaultClient);
    AvailableSupplyRequest availableSupplyRequest = new AvailableSupplyRequest(); // AvailableSupplyRequest | 
    try {
      AvailableSupplyResponse result = apiInstance.availableSupply(availableSupplyRequest);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling NodeRpCsApi#availableSupply");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **availableSupplyRequest** | [**AvailableSupplyRequest**](AvailableSupplyRequest.md)|  | [optional]

### Return type

[**AvailableSupplyResponse**](AvailableSupplyResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Available supply in RAW |  -  |

<a name="blockAccount"></a>
# **blockAccount**
> BlockAccountResponse blockAccount(blockAccountRequest)



Returns the account containing block 

### Example
```java
// Import classes:
import no.mehl.nano.ApiClient;
import no.mehl.nano.ApiException;
import no.mehl.nano.Configuration;
import no.mehl.nano.models.*;
import org.openapitools.client.api.NodeRpCsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost:7076");

    NodeRpCsApi apiInstance = new NodeRpCsApi(defaultClient);
    BlockAccountRequest blockAccountRequest = new BlockAccountRequest(); // BlockAccountRequest | 
    try {
      BlockAccountResponse result = apiInstance.blockAccount(blockAccountRequest);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling NodeRpCsApi#blockAccount");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **blockAccountRequest** | [**BlockAccountRequest**](BlockAccountRequest.md)|  | [optional]

### Return type

[**BlockAccountResponse**](BlockAccountResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The account containing block |  -  |

<a name="blockConfirm"></a>
# **blockConfirm**
> BlockConfirmResponse blockConfirm(blockConfirmRequest)



Request confirmation for **block** from known online representative nodes. Check results with confirmation history. 

### Example
```java
// Import classes:
import no.mehl.nano.ApiClient;
import no.mehl.nano.ApiException;
import no.mehl.nano.Configuration;
import no.mehl.nano.models.*;
import org.openapitools.client.api.NodeRpCsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost:7076");

    NodeRpCsApi apiInstance = new NodeRpCsApi(defaultClient);
    BlockConfirmRequest blockConfirmRequest = new BlockConfirmRequest(); // BlockConfirmRequest | 
    try {
      BlockConfirmResponse result = apiInstance.blockConfirm(blockConfirmRequest);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling NodeRpCsApi#blockConfirm");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **blockConfirmRequest** | [**BlockConfirmRequest**](BlockConfirmRequest.md)|  | [optional]

### Return type

[**BlockConfirmResponse**](BlockConfirmResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The account containing block |  -  |

<a name="blockCount"></a>
# **blockCount**
> BlockCountResponse blockCount(blockCountRequest)



Reports the number of blocks in the ledger and unchecked synchronizing blocks. 

### Example
```java
// Import classes:
import no.mehl.nano.ApiClient;
import no.mehl.nano.ApiException;
import no.mehl.nano.Configuration;
import no.mehl.nano.models.*;
import org.openapitools.client.api.NodeRpCsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost:7076");

    NodeRpCsApi apiInstance = new NodeRpCsApi(defaultClient);
    BlockCountRequest blockCountRequest = new BlockCountRequest(); // BlockCountRequest | 
    try {
      BlockCountResponse result = apiInstance.blockCount(blockCountRequest);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling NodeRpCsApi#blockCount");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **blockCountRequest** | [**BlockCountRequest**](BlockCountRequest.md)|  | [optional]

### Return type

[**BlockCountResponse**](BlockCountResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The count and unchecked blocks. |  -  |

<a name="blockCountType"></a>
# **blockCountType**
> BlockCountTypeResponse blockCountType(blockCountTypeRequest)



Reports the number of blocks in the ledger by type (send, receive, open, change, state with version) 

### Example
```java
// Import classes:
import no.mehl.nano.ApiClient;
import no.mehl.nano.ApiException;
import no.mehl.nano.Configuration;
import no.mehl.nano.models.*;
import org.openapitools.client.api.NodeRpCsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost:7076");

    NodeRpCsApi apiInstance = new NodeRpCsApi(defaultClient);
    BlockCountTypeRequest blockCountTypeRequest = new BlockCountTypeRequest(); // BlockCountTypeRequest | 
    try {
      BlockCountTypeResponse result = apiInstance.blockCountType(blockCountTypeRequest);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling NodeRpCsApi#blockCountType");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **blockCountTypeRequest** | [**BlockCountTypeRequest**](BlockCountTypeRequest.md)|  | [optional]

### Return type

[**BlockCountTypeResponse**](BlockCountTypeResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The number of blocks in the ledger. |  -  |

<a name="blockCreate"></a>
# **blockCreate**
> BlockCreateResponse blockCreate(blockCreateRequest)



Creates a json representations of new block based on input data &amp; signed with **private key** or **account** in **wallet**. Use for offline signing. 

### Example
```java
// Import classes:
import no.mehl.nano.ApiClient;
import no.mehl.nano.ApiException;
import no.mehl.nano.Configuration;
import no.mehl.nano.models.*;
import org.openapitools.client.api.NodeRpCsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost:7076");

    NodeRpCsApi apiInstance = new NodeRpCsApi(defaultClient);
    BlockCreateRequest blockCreateRequest = new BlockCreateRequest(); // BlockCreateRequest | 
    try {
      BlockCreateResponse result = apiInstance.blockCreate(blockCreateRequest);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling NodeRpCsApi#blockCreate");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **blockCreateRequest** | [**BlockCreateRequest**](BlockCreateRequest.md)|  | [optional]

### Return type

[**BlockCreateResponse**](BlockCreateResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The response of a state block |  -  |

<a name="blockHash"></a>
# **blockHash**
> BlockHashResponse blockHash(blockHashRequest)



Returning block hash for given block content. Using the optional **json_block** is recommended since v19.0. 

### Example
```java
// Import classes:
import no.mehl.nano.ApiClient;
import no.mehl.nano.ApiException;
import no.mehl.nano.Configuration;
import no.mehl.nano.models.*;
import org.openapitools.client.api.NodeRpCsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost:7076");

    NodeRpCsApi apiInstance = new NodeRpCsApi(defaultClient);
    BlockHashRequest blockHashRequest = new BlockHashRequest(); // BlockHashRequest | 
    try {
      BlockHashResponse result = apiInstance.blockHash(blockHashRequest);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling NodeRpCsApi#blockHash");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **blockHashRequest** | [**BlockHashRequest**](BlockHashRequest.md)|  | [optional]

### Return type

[**BlockHashResponse**](BlockHashResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The hashed representation of a block |  -  |

<a name="blockInfo"></a>
# **blockInfo**
> BlockInfoResponse blockInfo(blockInfoRequest)



Retrieves a json representation of the block in &#x60;contents&#x60; along with:  * _since version 18.0_: &#x60;block_account&#x60;, transaction &#x60;amount&#x60;, block &#x60;balance&#x60;, block &#x60;height&#x60; in account chain, block local modification &#x60;timestamp&#x60; * _since version 19.0_: Whether block was &#x60;confirmed&#x60;, &#x60;subtype&#x60; (for state blocks) of &#x60;send&#x60;, &#x60;receive&#x60;,  &#x60;change&#x60; or &#x60;epoch&#x60;  Using the optional &#x60;json_block&#x60; is recommended since v19.0. 

### Example
```java
// Import classes:
import no.mehl.nano.ApiClient;
import no.mehl.nano.ApiException;
import no.mehl.nano.Configuration;
import no.mehl.nano.models.*;
import org.openapitools.client.api.NodeRpCsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost:7076");

    NodeRpCsApi apiInstance = new NodeRpCsApi(defaultClient);
    BlockInfoRequest blockInfoRequest = new BlockInfoRequest(); // BlockInfoRequest | 
    try {
      BlockInfoResponse result = apiInstance.blockInfo(blockInfoRequest);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling NodeRpCsApi#blockInfo");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **blockInfoRequest** | [**BlockInfoRequest**](BlockInfoRequest.md)|  | [optional]

### Return type

[**BlockInfoResponse**](BlockInfoResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The response of a state block |  -  |

<a name="blocks"></a>
# **blocks**
> BlocksResponse blocks(blocksRequest)



Retrieves a json representations of **blocks**. 

### Example
```java
// Import classes:
import no.mehl.nano.ApiClient;
import no.mehl.nano.ApiException;
import no.mehl.nano.Configuration;
import no.mehl.nano.models.*;
import org.openapitools.client.api.NodeRpCsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost:7076");

    NodeRpCsApi apiInstance = new NodeRpCsApi(defaultClient);
    BlocksRequest blocksRequest = new BlocksRequest(); // BlocksRequest | 
    try {
      BlocksResponse result = apiInstance.blocks(blocksRequest);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling NodeRpCsApi#blocks");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **blocksRequest** | [**BlocksRequest**](BlocksRequest.md)|  | [optional]

### Return type

[**BlocksResponse**](BlocksResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The json representation, keyd on block hash. |  -  |

<a name="blocksInfo"></a>
# **blocksInfo**
> BlocksInfoResponse blocksInfo(blocksInfoRequest)



Retrieves a json representations of blocks in contents along with:  * _since version 18.0_: &#x60;block_account&#x60;, transaction &#x60;amount&#x60;, block &#x60;balance&#x60;, block &#x60;height&#x60; in account chain, block local modification  timestamp * _since version 19.0_: Whether block was &#x60;confirmed&#x60;, &#x60;subtype&#x60; (for state blocks) of &#x60;send&#x60;, &#x60;receive&#x60;, &#x60;change&#x60; or &#x60;epoch&#x60; 

### Example
```java
// Import classes:
import no.mehl.nano.ApiClient;
import no.mehl.nano.ApiException;
import no.mehl.nano.Configuration;
import no.mehl.nano.models.*;
import org.openapitools.client.api.NodeRpCsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost:7076");

    NodeRpCsApi apiInstance = new NodeRpCsApi(defaultClient);
    BlocksInfoRequest blocksInfoRequest = new BlocksInfoRequest(); // BlocksInfoRequest | 
    try {
      BlocksInfoResponse result = apiInstance.blocksInfo(blocksInfoRequest);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling NodeRpCsApi#blocksInfo");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **blocksInfoRequest** | [**BlocksInfoRequest**](BlocksInfoRequest.md)|  | [optional]

### Return type

[**BlocksInfoResponse**](BlocksInfoResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Blocks info response, keyed on the block hash. |  -  |

<a name="bootstrap"></a>
# **bootstrap**
> BootstrapResponse bootstrap(bootstrapRequest)



Initialize bootstrap to specific **IP address** and **port**. Not compatible with launch flag [--disable_legacy_bootstrap](https://docs.nano.org/commands/command-line-interface/#-disable_legacy_bootstrap) 

### Example
```java
// Import classes:
import no.mehl.nano.ApiClient;
import no.mehl.nano.ApiException;
import no.mehl.nano.Configuration;
import no.mehl.nano.models.*;
import org.openapitools.client.api.NodeRpCsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost:7076");

    NodeRpCsApi apiInstance = new NodeRpCsApi(defaultClient);
    BootstrapRequest bootstrapRequest = new BootstrapRequest(); // BootstrapRequest | 
    try {
      BootstrapResponse result = apiInstance.bootstrap(bootstrapRequest);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling NodeRpCsApi#bootstrap");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bootstrapRequest** | [**BootstrapRequest**](BootstrapRequest.md)|  | [optional]

### Return type

[**BootstrapResponse**](BootstrapResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A success response |  -  |

<a name="bootstrapAny"></a>
# **bootstrapAny**
> BootstrapAnyResponse bootstrapAny(bootstrapAnyRequest)



Initialize multi-connection bootstrap to random peers. Not compatible with launch flag [--disable_legacy_bootstrap](https://docs.nano.org/commands/command-line-interface/#-disable_legacy_bootstrap) 

### Example
```java
// Import classes:
import no.mehl.nano.ApiClient;
import no.mehl.nano.ApiException;
import no.mehl.nano.Configuration;
import no.mehl.nano.models.*;
import org.openapitools.client.api.NodeRpCsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost:7076");

    NodeRpCsApi apiInstance = new NodeRpCsApi(defaultClient);
    BootstrapAnyRequest bootstrapAnyRequest = new BootstrapAnyRequest(); // BootstrapAnyRequest | 
    try {
      BootstrapAnyResponse result = apiInstance.bootstrapAny(bootstrapAnyRequest);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling NodeRpCsApi#bootstrapAny");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bootstrapAnyRequest** | [**BootstrapAnyRequest**](BootstrapAnyRequest.md)|  | [optional]

### Return type

[**BootstrapAnyResponse**](BootstrapAnyResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A success response |  -  |

<a name="bootstrapLazy"></a>
# **bootstrapLazy**
> BootstrapLazyResponse bootstrapLazy(bootstrapLazyRequest)



_version 17.0+_  Initialize lazy bootstrap with given block hash. Not compatible with launch flag [--disable_lazy_bootstrap](https://docs.nano.org/commands/command-line-interface/#-disable_lazy_bootstrap) 

### Example
```java
// Import classes:
import no.mehl.nano.ApiClient;
import no.mehl.nano.ApiException;
import no.mehl.nano.Configuration;
import no.mehl.nano.models.*;
import org.openapitools.client.api.NodeRpCsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost:7076");

    NodeRpCsApi apiInstance = new NodeRpCsApi(defaultClient);
    BootstrapLazyRequest bootstrapLazyRequest = new BootstrapLazyRequest(); // BootstrapLazyRequest | 
    try {
      BootstrapLazyResponse result = apiInstance.bootstrapLazy(bootstrapLazyRequest);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling NodeRpCsApi#bootstrapLazy");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bootstrapLazyRequest** | [**BootstrapLazyRequest**](BootstrapLazyRequest.md)|  | [optional]

### Return type

[**BootstrapLazyResponse**](BootstrapLazyResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Whether bootstrap was started |  -  |

<a name="chain"></a>
# **chain**
> ChainResponse chain(chainRequest)



Returns a consecutive list of block hashes in the account chain starting at **block** back to **count** (direction from frontier back to open block, from newer blocks to older). Will list all blocks back to the open block of this chain when count is set to \&quot;-1\&quot;. The requested block hash is included in the answer. 

### Example
```java
// Import classes:
import no.mehl.nano.ApiClient;
import no.mehl.nano.ApiException;
import no.mehl.nano.Configuration;
import no.mehl.nano.models.*;
import org.openapitools.client.api.NodeRpCsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost:7076");

    NodeRpCsApi apiInstance = new NodeRpCsApi(defaultClient);
    ChainRequest chainRequest = new ChainRequest(); // ChainRequest | 
    try {
      ChainResponse result = apiInstance.chain(chainRequest);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling NodeRpCsApi#chain");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **chainRequest** | [**ChainRequest**](ChainRequest.md)|  | [optional]

### Return type

[**ChainResponse**](ChainResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The block hashes. |  -  |

<a name="confirmationActive"></a>
# **confirmationActive**
> ConfirmationActiveResponse confirmationActive(confirmationActiveRequest)



_version 16.0+_  Returns list of active elections roots (excluding stopped &amp; aborted elections). Find info about specific root with confirmation_info  The roots provided are two parts and differ between the first account block and subsequent blocks:  * First account block (open): 0000000000000000000000000000000000000000000000000000000000000000 + account public key * Other blocks: previous hash + previous hash 

### Example
```java
// Import classes:
import no.mehl.nano.ApiClient;
import no.mehl.nano.ApiException;
import no.mehl.nano.Configuration;
import no.mehl.nano.models.*;
import org.openapitools.client.api.NodeRpCsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost:7076");

    NodeRpCsApi apiInstance = new NodeRpCsApi(defaultClient);
    ConfirmationActiveRequest confirmationActiveRequest = new ConfirmationActiveRequest(); // ConfirmationActiveRequest | 
    try {
      ConfirmationActiveResponse result = apiInstance.confirmationActive(confirmationActiveRequest);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling NodeRpCsApi#confirmationActive");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **confirmationActiveRequest** | [**ConfirmationActiveRequest**](ConfirmationActiveRequest.md)|  | [optional]

### Return type

[**ConfirmationActiveResponse**](ConfirmationActiveResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The confirmations |  -  |

<a name="confirmationHeightCurrentlyProcessing"></a>
# **confirmationHeightCurrentlyProcessing**
> ConfirmationHeightCurrentlyProcessingResponse confirmationHeightCurrentlyProcessing(confirmationHeightCurrentlyProcessingRequest)



_version 19.0+_  Returns the hash of the block which is having the confirmation height set for, error otherwise. When a block is being confirmed, it must confirm all blocks in the chain below and iteratively follow all receive blocks. This can take a long time, so it can be useful to find which block was the original being confirmed. 

### Example
```java
// Import classes:
import no.mehl.nano.ApiClient;
import no.mehl.nano.ApiException;
import no.mehl.nano.Configuration;
import no.mehl.nano.models.*;
import org.openapitools.client.api.NodeRpCsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost:7076");

    NodeRpCsApi apiInstance = new NodeRpCsApi(defaultClient);
    ConfirmationHeightCurrentlyProcessingRequest confirmationHeightCurrentlyProcessingRequest = new ConfirmationHeightCurrentlyProcessingRequest(); // ConfirmationHeightCurrentlyProcessingRequest | 
    try {
      ConfirmationHeightCurrentlyProcessingResponse result = apiInstance.confirmationHeightCurrentlyProcessing(confirmationHeightCurrentlyProcessingRequest);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling NodeRpCsApi#confirmationHeightCurrentlyProcessing");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **confirmationHeightCurrentlyProcessingRequest** | [**ConfirmationHeightCurrentlyProcessingRequest**](ConfirmationHeightCurrentlyProcessingRequest.md)|  | [optional]

### Return type

[**ConfirmationHeightCurrentlyProcessingResponse**](ConfirmationHeightCurrentlyProcessingResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Hash of the block which is having the confirmation height set for. |  -  |

<a name="confirmationHistory"></a>
# **confirmationHistory**
> ConfirmationHistoryResponse confirmationHistory(confirmationHistoryRequest)



_version 12.0+_ _duration, time, confirmation_stats: version 17.0+_  Returns hash, tally weight, election duration (in milliseconds), election confirmation timestamp for recent elections winners. Also returns stats: count of elections in history (limited to 2048) &amp; average duration time  With version 19.0+ &#x60;confirmation_history_size&#x60; can be managed in [config.json](https://docs.nano.org/running-a-node/configuration/#example-file) to adjust the number of elections to be kept in history and returned by this call. Due to timings inside the node, the default 2048 limit will return all confirmations up to traffic levels of  approximately 56 confirmations/sec. To properly track levels above this, increase this value or use the confirmation subscription through the [websocket](https://docs.nano.org/integration-guides/advanced/#websocket-support) instead. 

### Example
```java
// Import classes:
import no.mehl.nano.ApiClient;
import no.mehl.nano.ApiException;
import no.mehl.nano.Configuration;
import no.mehl.nano.models.*;
import org.openapitools.client.api.NodeRpCsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost:7076");

    NodeRpCsApi apiInstance = new NodeRpCsApi(defaultClient);
    ConfirmationHistoryRequest confirmationHistoryRequest = new ConfirmationHistoryRequest(); // ConfirmationHistoryRequest | 
    try {
      ConfirmationHistoryResponse result = apiInstance.confirmationHistory(confirmationHistoryRequest);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling NodeRpCsApi#confirmationHistory");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **confirmationHistoryRequest** | [**ConfirmationHistoryRequest**](ConfirmationHistoryRequest.md)|  | [optional]

### Return type

[**ConfirmationHistoryResponse**](ConfirmationHistoryResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Hash of the block which is having the confirmation height set for. |  -  |

<a name="confirmationInfo"></a>
# **confirmationInfo**
> ConfirmationInfoResponse confirmationInfo(confirmationInfoRequest)



_version 16.0+_  Returns info about active election by *root*. Including announcements count, last winner (initially local ledger block), total tally of voted representatives, concurrent blocks with tally &amp; block contents for each. Using the optional &#x60;json_block&#x60; is recommended since v19.0.  The roots provided are two parts and differ between the first account block and subsequent blocks:  * First account block (open): 0000000000000000000000000000000000000000000000000000000000000000 + account public key * Other blocks: previous hash + previous hash 

### Example
```java
// Import classes:
import no.mehl.nano.ApiClient;
import no.mehl.nano.ApiException;
import no.mehl.nano.Configuration;
import no.mehl.nano.models.*;
import org.openapitools.client.api.NodeRpCsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost:7076");

    NodeRpCsApi apiInstance = new NodeRpCsApi(defaultClient);
    ConfirmationInfoRequest confirmationInfoRequest = new ConfirmationInfoRequest(); // ConfirmationInfoRequest | 
    try {
      ConfirmationInfoResponse result = apiInstance.confirmationInfo(confirmationInfoRequest);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling NodeRpCsApi#confirmationInfo");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **confirmationInfoRequest** | [**ConfirmationInfoRequest**](ConfirmationInfoRequest.md)|  | [optional]

### Return type

[**ConfirmationInfoResponse**](ConfirmationInfoResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The confirmation information. |  -  |

<a name="keyCreate"></a>
# **keyCreate**
> KeyCreateResponse keyCreate(keyCreateRequest)



Generates an **adhoc random** keypair 

### Example
```java
// Import classes:
import no.mehl.nano.ApiClient;
import no.mehl.nano.ApiException;
import no.mehl.nano.Configuration;
import no.mehl.nano.models.*;
import org.openapitools.client.api.NodeRpCsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost:7076");

    NodeRpCsApi apiInstance = new NodeRpCsApi(defaultClient);
    KeyCreateRequest keyCreateRequest = new KeyCreateRequest(); // KeyCreateRequest | 
    try {
      KeyCreateResponse result = apiInstance.keyCreate(keyCreateRequest);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling NodeRpCsApi#keyCreate");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **keyCreateRequest** | [**KeyCreateRequest**](KeyCreateRequest.md)|  | [optional]

### Return type

[**KeyCreateResponse**](KeyCreateResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | created key pair |  -  |

<a name="keyExpand"></a>
# **keyExpand**
> KeyExpandResponse keyExpand(keyExpandRequest)



Derive public key and account number from **private key** 

### Example
```java
// Import classes:
import no.mehl.nano.ApiClient;
import no.mehl.nano.ApiException;
import no.mehl.nano.Configuration;
import no.mehl.nano.models.*;
import org.openapitools.client.api.NodeRpCsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost:7076");

    NodeRpCsApi apiInstance = new NodeRpCsApi(defaultClient);
    KeyExpandRequest keyExpandRequest = new KeyExpandRequest(); // KeyExpandRequest | 
    try {
      KeyExpandResponse result = apiInstance.keyExpand(keyExpandRequest);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling NodeRpCsApi#keyExpand");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **keyExpandRequest** | [**KeyExpandRequest**](KeyExpandRequest.md)|  | [optional]

### Return type

[**KeyExpandResponse**](KeyExpandResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | the public key and an account |  -  |

<a name="process"></a>
# **process**
> ProcessResponse process(processRequest)



Publish block to the network

### Example
```java
// Import classes:
import no.mehl.nano.ApiClient;
import no.mehl.nano.ApiException;
import no.mehl.nano.Configuration;
import no.mehl.nano.models.*;
import org.openapitools.client.api.NodeRpCsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost:7076");

    NodeRpCsApi apiInstance = new NodeRpCsApi(defaultClient);
    ProcessRequest processRequest = new ProcessRequest(); // ProcessRequest | 
    try {
      ProcessResponse result = apiInstance.process(processRequest);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling NodeRpCsApi#process");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **processRequest** | [**ProcessRequest**](ProcessRequest.md)|  | [optional]

### Return type

[**ProcessResponse**](ProcessResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Hash of the processed block |  -  |

<a name="workGenerate"></a>
# **workGenerate**
> WorkGenerateResponse workGenerate(workGenerateRequest)



Generates work for block. hash is the frontier of the account or in the case of an open block, the public key representation of the account which can be found with account_key 

### Example
```java
// Import classes:
import no.mehl.nano.ApiClient;
import no.mehl.nano.ApiException;
import no.mehl.nano.Configuration;
import no.mehl.nano.models.*;
import org.openapitools.client.api.NodeRpCsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost:7076");

    NodeRpCsApi apiInstance = new NodeRpCsApi(defaultClient);
    WorkGenerateRequest workGenerateRequest = new WorkGenerateRequest(); // WorkGenerateRequest | 
    try {
      WorkGenerateResponse result = apiInstance.workGenerate(workGenerateRequest);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling NodeRpCsApi#workGenerate");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **workGenerateRequest** | [**WorkGenerateRequest**](WorkGenerateRequest.md)|  | [optional]

### Return type

[**WorkGenerateResponse**](WorkGenerateResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The resulting work hash |  -  |

