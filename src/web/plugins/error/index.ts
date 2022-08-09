/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
import { WebSDK } from '@web/core/WebSDK'
import { captureJsError } from './lib/jserror'
import { captureXHRError } from './lib/xhrError'
import { captureBlankError } from './lib/blankError'

captureJsError();
captureXHRError();
captureBlankError();

function errorPlugin(sdk: WebSDK) {
  console.log(sdk.version, 'errorPlugin')
}

export default errorPlugin
