/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
import { WebSDK } from '@web/core/WebSDK'

function errorPlugin(sdk: WebSDK) {
  console.log(sdk.version, 'errorPlugin')
}

export default errorPlugin
