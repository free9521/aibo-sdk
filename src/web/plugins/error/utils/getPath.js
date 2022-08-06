export function getPath(path) {
  const result = [];
  for (const p of path) {
    let temp = p.tagName;
    // 元素有id的话
    if (p.id) {
      temp += `#${p.id}`;
    }
    // 元素有class
    if (p.className) {
      const cn = p.className.split(' ');
      for (const name of cn) {
        temp += `.${name}`;
      }
    }

    result.push(temp);
    if (temp === 'HTML') {
      break;
    }
  }
  return result.join('  ');
}
