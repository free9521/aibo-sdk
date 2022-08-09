// @ts-nocheck
// 监控白屏异常

// 判断是否为空白点
function isWrapper(ele) {
  const e = ele.nodeName.toLowerCase();
  // console.log(e);
  if (e === 'body' || e === 'html' || e === 'document') {
    return true;
  }
  return false;
}

export function captureBlankError() {
  // 统计页面中所有空白点个数
  let blankPoint = 0;
  // 分别在页面水平中线和垂直中线上取9个点
  // 判断是否为空白元素
  for (let i = 1; i < 10; i++) {
    // elementsFromPoint 函数可以返回指定坐标处从里到外所有 HTML 元素
    const xElements = document.elementsFromPoint(
      window.innerWidth * i / 10, window.innerHeight / 2);
    const yElements = document.elementsFromPoint(
      window.innerWidth / 2, window.innerHeight * i / 10);

    // console.log(xElements);
    // 判断最里面的元素是否为页面渲染的元素
    if (isWrapper(xElements[0])) blankPoint++;
    if (isWrapper(yElements[0])) blankPoint++;
  }
  if (blankPoint === 18) {
    const log = {
      kind: 'stability',
      type: 'blankScreenError',
      emptyPoints: blankPoint,
      screen: `${window.screen.width} X ${window.screen.height}`, // 屏幕分辨率
      viewPoint: `${window.innerWidth} X ${window.innerHeight}`, // 视口大小
    }
    console.log(log);
  }
}
