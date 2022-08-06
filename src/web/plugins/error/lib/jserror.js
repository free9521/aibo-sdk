import { getPath } from '@web/plugins/error/utils/getPath';
import { getStack } from '@web/plugins/error/utils/getStack';

function captureJsError() {
  // 捕获js执行错误和静态资源加载错误
  window.addEventListener('error', (e) => {
    // 阻止默认事件，不让控制台报错
    e.preventDefault();
    let log = null;

    // 资源加载错误
    if (e.target && (e.target.src || e.target.href)) {
      log = {
        kind: 'stability', // 监控指标的大类
        type: 'resourceError', // 具体错误类型
        message: '404 Not Found',
        target: e.target.tagName, // 错误元素
        filename: e.target.src || e.target.href, // 错误的文件名
        path: getPath(e.path), // 错误的元素路径
      };
    } else { // js 执行错误
      log = {
        kind: 'stability', // 监控指标的大类
        type: 'jsError', // 具体错误类型
        message: e.message, // 具体报错信息
        filename: e.filename, // 错误的文件名
        stack: getStack(e.error.stack), // 错误堆栈
        position: `${e.lineno} : ${e.colno}`
      };
    }

    console.log(log);
  }, true);

  // 捕获promise错误
  window.addEventListener('unhandledrejection', (e) => {
    e.preventDefault();
    // console.log(e);
    const log = {
      kind: 'stability', // 监控指标的大类
      type: 'promiseError', // 具体错误类型
      reason: typeof e.reason === 'string' ? e.reason : e.reason.message, // 具体报错信息
      message: 'Uncaught (in Promise)',
      stack: typeof e.reason === 'string' ? '' : getStack(e.reason.stack)
    }
    console.log(log);
  })
}

export { captureJsError }
