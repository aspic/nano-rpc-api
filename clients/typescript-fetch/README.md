# nano-rpc-fetch

Generated Typescript client for Nano RPC

## Install with NPM

    $ npm install --save nano-rpc-fetch

## Example usage

```javascript
// Import 
import { NodeRPCsApi, KeyCreateRequestActionEnum } from 'nano-rpc-fetch'

const nanoApi = new NodeRPCsApi()
nanoApi.keyCreate({
  keyCreateRequest: {
    action: KeyCreateRequestActionEnum.KeyCreate
  }
}).then(res => {
  console.log(res)
})

```
