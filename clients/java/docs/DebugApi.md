# DebugApi

All URIs are relative to *http://localhost:7076*

Method | HTTP request | Description
------------- | ------------- | -------------
[**confirmationHeightCurrentlyProcessing**](DebugApi.md#confirmationHeightCurrentlyProcessing) | **POST** /#confirmation_height_currently_processing | 


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
import org.openapitools.client.api.DebugApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost:7076");

    DebugApi apiInstance = new DebugApi(defaultClient);
    ConfirmationHeightCurrentlyProcessingRequest confirmationHeightCurrentlyProcessingRequest = new ConfirmationHeightCurrentlyProcessingRequest(); // ConfirmationHeightCurrentlyProcessingRequest | 
    try {
      ConfirmationHeightCurrentlyProcessingResponse result = apiInstance.confirmationHeightCurrentlyProcessing(confirmationHeightCurrentlyProcessingRequest);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling DebugApi#confirmationHeightCurrentlyProcessing");
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

