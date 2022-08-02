import { BaseSDK } from '@core/BaseSDK'
import { WebSDKConfig } from './config'

// TODO : Sender / LifeCycle
class WebSDK extends BaseSDK {
  readonly version = '1.0.0'

  readonly config: WebSDKConfig

  constructor(config: WebSDKConfig) {
    super()
    this.config = config
  }

  mount(): void {
    // 加载所有插件
    this._installedPlugins.forEach(([plugin, options]) => {
      if (typeof plugin.install === 'function') {
        plugin.install.apply(plugin, [this, ...options])
      } else if (typeof plugin === 'function') {
        plugin.apply(plugin, [this, ...options])
      }
    })
  }

  report(...args: unknown[]): void {
    console.log(this)
    throw new Error('Method not implemented.')
  }
}

export { WebSDK }
