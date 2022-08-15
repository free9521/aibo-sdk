/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
import { WebSDK } from '@web/core/WebSDK'
import { captureJsError } from './lib/jserror'
import { captureXHRError } from './lib/xhrError'
import { captureBlankError } from './lib/blankError'
// import { captureVueError } from './lib/vueError'

function errorPlugin(sdk: WebSDK, app) {
  console.log(sdk.version, 'errorPlugin')
  // captureVueError(app);
  captureJsError();
  captureXHRError();
  captureBlankError();
}

export default errorPlugin
