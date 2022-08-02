import { BaseSDKConfig } from './config'
import { Plugin } from './plugin'

abstract class BaseSDK {
  abstract version: string

  abstract config: BaseSDKConfig

  protected readonly _visiedPlugins: WeakSet<Plugin<this>> = new WeakSet()

  protected readonly _installedPlugins: [plugin: Plugin<this>, options: unknown[]][] = []

  /**
   * 注册插件
   *
   * @param plugin 一个带 install 方法的对象 或者 一个将被用作 install 方法的函数
   * @param options 传递给插件的参数
   */
  use(plugin: Plugin<this>, ...options: unknown[]): this {
    if (this._visiedPlugins.has(plugin)) return this

    this._visiedPlugins.add(plugin)
    this._installedPlugins.push([plugin, options])
    return this
  }

  /**
   * 挂载sdk
   */
  abstract mount(): void

  /**
   * 上报数据
   */
  abstract report(...args: unknown[]): void
}

export { BaseSDK, BaseSDKConfig }
