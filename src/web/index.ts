import { WebSDK } from '@web/core/WebSDK'
import { WebSDKConfig, WEBSDK_DEFAULT_CONFIG } from '@web/core/config'
import builtinPlugins from '@web/plugins/index'

/**
 * 创建 SDK 单例
 */
function createSDKWrapper() {
  let instance: WebSDK | null = null

  return (config: WebSDKConfig) => {
    if (instance === null) {
      const newConfig = { ...WEBSDK_DEFAULT_CONFIG, ...config }
      instance = new WebSDK(newConfig)

      for (const plugin of Object.values(builtinPlugins)) {
        instance.use(plugin)
      }
    }

    return instance
  }
}

const createSDK = createSDKWrapper()

export { createSDK }
