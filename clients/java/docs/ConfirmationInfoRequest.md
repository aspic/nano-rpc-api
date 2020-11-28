

# ConfirmationInfoRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**action** | [**ActionEnum**](#ActionEnum) |  | 
**jsonBlock** | [**ModelBoolean**](ModelBoolean.md) | Defaults to &#x60;\&quot;false\&quot;&#x60;. If &#x60;\&quot;true\&quot;&#x60;, &#x60;\&quot;contents\&quot;&#x60; contains a JSON subtree instead of a JSON string. |  [optional]
**contents** | [**ModelBoolean**](ModelBoolean.md) | Defaults to &#x60;\&quot;true\&quot;&#x60;. If &#x60;\&quot;false\&quot;&#x60;, disables contents for each block. |  [optional]
**representatives** | [**ModelBoolean**](ModelBoolean.md) | Defaults to &#x60;\&quot;false\&quot;&#x60;. If &#x60;\&quot;true\&quot;&#x60;, returns a list of votes representatives &amp; its weights for each block. |  [optional]



## Enum: ActionEnum

Name | Value
---- | -----
CONFIRMATION_INFO | &quot;confirmation_info&quot;



