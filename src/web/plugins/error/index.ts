/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
import { WebSDK } from '@web/core/WebSDK'
import { captureJsError } from './lib/jserror'
import { captureXHRError } from './lib/xhrError'
import { captureBlankError } from './lib/blankError'

function errorPlugin(sdk: WebSDK, app) {
  console.log(sdk.version, 'errorPlugin')
  captureJsError();
  captureXHRError();
  captureBlankError();
}

export default errorPlugin
