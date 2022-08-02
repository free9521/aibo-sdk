/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
import { WebSDK } from '@web/core/WebSDK'

function behaviorPlugin(sdk: WebSDK) {
  console.log(sdk.version, 'behaviorPlugin')
}

export default behaviorPlugin
