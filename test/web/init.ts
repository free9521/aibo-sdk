// 用于webpack dev server 挂载 SDK

import { createSDK } from '@web/index'

const sdk = createSDK({
  appId: 'foo',
  appSecret: 'bar'
})

sdk.mount()
