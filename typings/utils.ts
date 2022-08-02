type ConstructorType<Args, Return> = new (...args: readonly Args[]) => Return

/**
 * 保留对象上的必选参数
 */
type PickRequired<T extends object> = {
  [K in keyof T as Pick<T, K> extends Required<Pick<T, K>> ? K : never]: T[K]
}

/**
 * 保留对象上的可选参数
 */
type PickPartial<T extends object> = {
  [K in keyof T as Pick<T, K> extends Required<Pick<T, K>> ? never : K]: T[K]
}

export { ConstructorType, PickRequired, PickPartial }
