/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
import { WebSDK } from '@web/core/WebSDK'

function performancePlugin(sdk: WebSDK) {
  console.log(sdk.version, 'performancePlugin')
}

export default performancePlugin
