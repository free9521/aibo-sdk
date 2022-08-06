/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
import { WebSDK } from '@web/core/WebSDK'
import { captureJsError } from './lib/jserror'

function errorPlugin(sdk: WebSDK) {
  captureJsError();
  console.log(sdk.version, 'errorPlugin')
}

export default errorPlugin
