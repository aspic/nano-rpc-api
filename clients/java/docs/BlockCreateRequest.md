

# BlockCreateRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**action** | [**ActionEnum**](#ActionEnum) |  |  [optional]
**jsonBlock** | [**ModelBoolean**](ModelBoolean.md) | If \&quot;true\&quot;, \&quot;block\&quot; must contain a JSON subtree instead of a JSON string. |  [optional]
**type** | [**TypeEnum**](#TypeEnum) |  |  [optional]
**balance** | [**BigDecimal**](BigDecimal.md) | 1 raw is the smallest possible division and NANO/Nano (Mnano) is the current standard division used in most wallets, on exchanges, etc. |  [optional]
**key** | **String** |  |  [optional]
**representative** | **String** |  |  [optional]
**link** | **String** |  |  [optional]
**work** | **String** |  |  [optional]
**previous** | **String** |  |  [optional]
**wallet** | **String** |  |  [optional]
**account** | **String** |  |  [optional]



## Enum: ActionEnum

Name | Value
---- | -----
BLOCK_CREATE | &quot;block_create&quot;



## Enum: TypeEnum

Name | Value
---- | -----
STATE | &quot;state&quot;



