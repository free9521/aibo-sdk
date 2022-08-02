type PluginInstallFunction<T> = (sdk: T, ...options: unknown[]) => unknown
type Plugin<T> =
  | (PluginInstallFunction<T> & {
      install?: PluginInstallFunction<T>
    })
  | {
      install: PluginInstallFunction<T>
    }

export { Plugin }
