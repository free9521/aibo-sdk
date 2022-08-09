// @ts-nocheck

// 监控接口异常
export function captureXHRError() {
  const { XMLHttpRequest } = window;

  // 重写 open，缓存请求方式，请求路径，是否异步
  const oldOpen = XMLHttpRequest.prototype.open;
  XMLHttpRequest.prototype.open = function (...args) {
    this.reqData = {
      method: args[0] || null,
      url: args[1] || null,
      async: args[2] || false
    };
    return oldOpen.apply(this, args);
  }

  // 重写 send，为 XHR 绑定 load、error、abort 事件
  // 这样返回请求时就知道什么状态了
  const oldSend = XMLHttpRequest.prototype.send;
  XMLHttpRequest.prototype.send = function (body) {
    if (this.reqData) {
      // 记录发送请求的时间
      const startTime = Date.now();

      // 事件处理函数
      const handler = (type) => (event) => {
        event.preventDefault();

        const duration = Date.now() - startTime;
        const { status } = this;
        const { statusText } = this;
        const log = {
          kind: 'stability', // 监控指标的大类
          type: 'xhr', // 具体错误类型
          reqType: this.reqData.method, // 请求类型
          eventType: event.type, // 返回的事件类型
          path: this.reqData.url, // 请求路径
          status: `${status}-${statusText}`, // 请求状态
          duration, // 请求时间
          response: this.response, // 响应
          params: body || '', // 请求体
        }
        console.log(log);
      }
      // 绑定请求回来的事件
      this.addEventListener('load', handler('load'), false);
      this.addEventListener('error', handler('error'), false);
      this.addEventListener('abort', handler('abort'), false);
    }
    return oldSend.apply(this, body);
  }
}
