import { BaseSDKConfig } from '@core/BaseSDK'
import { PickPartial } from '@typings/utils'

interface WebSDKConfig extends BaseSDKConfig {
  foo?: string
}

// 可选参数的默认值
const WEBSDK_DEFAULT_CONFIG: Required<PickPartial<WebSDKConfig>> = {
  foo: 'bar'
}

export { WebSDKConfig, WEBSDK_DEFAULT_CONFIG }
