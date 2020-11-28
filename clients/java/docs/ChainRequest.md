

# ChainRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**action** | [**ActionEnum**](#ActionEnum) |  | 
**block** | **String** |  | 
**count** | **String** |  | 
**offset** | **String** | _version 18.0+_  Number, 0 by default. Return the account chain block hashes offset by the specified number of blocks  |  [optional]
**reverse** | [**ModelBoolean**](ModelBoolean.md) | _version 18.0+_  Boolean, false by default. Returns a list of block hashes in the account chain starting at block up to count (direction from open block up to frontier, from older blocks to newer). Equal to [successors](https://docs.nano.org/commands/rpc-protocol/#successors)  |  [optional]



## Enum: ActionEnum

Name | Value
---- | -----
CHAIN | &quot;chain&quot;



