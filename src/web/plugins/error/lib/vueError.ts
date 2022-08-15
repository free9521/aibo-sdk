// @ts-nocheck
// 捕捉 Vue 异常
// 如果用户用 Vue 写的页面，需要在 main.js 中自己调用
import { getStack } from '../utils/getStack'

export default function captureVueError(app) {
  // console.log(app);
  app.config.errorHandler = (err) => {
    // console.dir(err);
    const log = {
      kind: 'stability', // 监控指标的大类
      type: 'vueError', // 具体错误类型
      message: `${err.name}: ${err.message}`, // 具体报错信息
      stack: getStack(err.stack), // 错误堆栈
    }
    console.log(log);
  }
}
