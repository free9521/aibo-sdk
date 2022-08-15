// // @ts-nocheck
// import { getStack } from '../utils/getStack'

// export function captureVueError(app) {
//   // console.log(app);
//   app.config.errorHandler = (err) => {
//     // console.dir(err);
//     const log = {
//       kind: 'stability', // 监控指标的大类
//       type: 'vueError', // 具体错误类型
//       message: `${err.name}: ${err.message}`, // 具体报错信息
//       stack: getStack(err.stack), // 错误堆栈
//     }
//     console.log(log);
//   }
// }
