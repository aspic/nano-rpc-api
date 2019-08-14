# WalletApi

All URIs are relative to *http://localhost:7076*

Method | HTTP request | Description
------------- | ------------- | -------------
[**accountsCreate**](WalletApi.md#accountsCreate) | **POST** /#accounts_create | Creates new accounts, insert next deterministic keys in wallet up to count
[**receive**](WalletApi.md#receive) | **POST** /#receive | Receive pending block for account in wallet
[**walletCreate**](WalletApi.md#walletCreate) | **POST** /#wallet_create | Creates a new random wallet id


<a name="accountsCreate"></a>
# **accountsCreate**
> AccountsCreateResponse accountsCreate(accountsCreateRequest)

Creates new accounts, insert next deterministic keys in wallet up to count

### Example
```java
// Import classes:
import no.mehl.nano.ApiClient;
import no.mehl.nano.ApiException;
import no.mehl.nano.Configuration;
import no.mehl.nano.models.*;
import org.openapitools.client.api.WalletApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost:7076");

    WalletApi apiInstance = new WalletApi(defaultClient);
    AccountsCreateRequest accountsCreateRequest = new AccountsCreateRequest(); // AccountsCreateRequest | 
    try {
      AccountsCreateResponse result = apiInstance.accountsCreate(accountsCreateRequest);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling WalletApi#accountsCreate");
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
 **accountsCreateRequest** | [**AccountsCreateRequest**](AccountsCreateRequest.md)|  | [optional]

### Return type

[**AccountsCreateResponse**](AccountsCreateResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | a list of the created accounts |  -  |

<a name="receive"></a>
# **receive**
> ReceiveResponse receive(receiveRequest)

Receive pending block for account in wallet

### Example
```java
// Import classes:
import no.mehl.nano.ApiClient;
import no.mehl.nano.ApiException;
import no.mehl.nano.Configuration;
import no.mehl.nano.models.*;
import org.openapitools.client.api.WalletApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost:7076");

    WalletApi apiInstance = new WalletApi(defaultClient);
    ReceiveRequest receiveRequest = new ReceiveRequest(); // ReceiveRequest | 
    try {
      ReceiveResponse result = apiInstance.receive(receiveRequest);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling WalletApi#receive");
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
 **receiveRequest** | [**ReceiveRequest**](ReceiveRequest.md)|  | [optional]

### Return type

[**ReceiveResponse**](ReceiveResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | the eventually received block |  -  |

<a name="walletCreate"></a>
# **walletCreate**
> WalletCreateResponse walletCreate(walletCreateRequest)

Creates a new random wallet id

### Example
```java
// Import classes:
import no.mehl.nano.ApiClient;
import no.mehl.nano.ApiException;
import no.mehl.nano.Configuration;
import no.mehl.nano.models.*;
import org.openapitools.client.api.WalletApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost:7076");

    WalletApi apiInstance = new WalletApi(defaultClient);
    WalletCreateRequest walletCreateRequest = new WalletCreateRequest(); // WalletCreateRequest | 
    try {
      WalletCreateResponse result = apiInstance.walletCreate(walletCreateRequest);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling WalletApi#walletCreate");
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
 **walletCreateRequest** | [**WalletCreateRequest**](WalletCreateRequest.md)|  | [optional]

### Return type

[**WalletCreateResponse**](WalletCreateResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The created wallet id |  -  |

