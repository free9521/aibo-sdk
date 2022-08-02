import { createSDK } from '../../src/web/index'

describe('测试', () => {
  it('一加一等于二', () => {
    expect(1 + 1).toStrictEqual(2)
  })
})

describe('测试WebSDK', () => {
  it('需要正确初始化', () => {
    const sdk = createSDK({
      appId: 'foo',
      appSecret: 'bar',
      foo: 'bar'
    })

    expect(sdk.config.foo).toStrictEqual('bar')
    expect(sdk.version).toStrictEqual('1.0.0')
  })
})
